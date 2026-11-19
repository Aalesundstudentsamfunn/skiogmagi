-- Schema snapshot for the semi-automatic booking system. capacity means ROOMS.
-- Run through Supabase migrations; never expose the service-role key to a browser.
alter table skiogmagi.booking
  add column status text not null default 'pending' check (status in ('pending','confirmed','cancelled')),
  add column group_size integer check (group_size between 1 and 4),
  add column room_preference text check (room_preference in ('women','men','contact')),
  add column public_reference uuid not null default gen_random_uuid() unique,
  add column request_key uuid unique,
  add column request_hash text,
  add column responsible_person_id bigint references skiogmagi.booking_person(id),
  add column staff_note text;

-- Keep legacy id_responsible intact; it is UUID although booking_person.id is bigint.
create table skiogmagi.room_allocation (
  id bigint generated always as identity primary key,
  room_type uuid not null references skiogmagi.oversikt(id),
  created_at timestamptz not null default now()
);
alter table skiogmagi.booking add column allocation_id bigint references skiogmagi.room_allocation(id);
create table skiogmagi.ticket_claim (
  ticket_id text primary key,
  booking_id bigint not null references skiogmagi.booking(id)
);
create table skiogmagi.booking_rate_limit (
  bucket text primary key,
  attempts integer not null,
  expires_at timestamptz not null
);
alter table skiogmagi.room_allocation enable row level security;
alter table skiogmagi.ticket_claim enable row level security;
alter table skiogmagi.booking_rate_limit enable row level security;
create index booking_person_booking_idx on skiogmagi.booking_person(room_booking_id);
create index booking_room_type_idx on skiogmagi.booking(room_type);
create index booking_responsible_idx on skiogmagi.booking(responsible_person_id);
create index booking_allocation_idx on skiogmagi.booking(allocation_id);
create index booking_status_idx on skiogmagi.booking(status);
create index allocation_room_type_idx on skiogmagi.room_allocation(room_type);
create index ticket_claim_booking_idx on skiogmagi.ticket_claim(booking_id);
create index booking_rate_expiry_idx on skiogmagi.booking_rate_limit(expires_at);

grant usage on schema skiogmagi to service_role;
grant select,insert,update,delete on skiogmagi.booking,skiogmagi.booking_person,
  skiogmagi.oversikt,skiogmagi.room_allocation,skiogmagi.ticket_claim,skiogmagi.booking_rate_limit to service_role;
grant usage,select on all sequences in schema skiogmagi to service_role;
revoke all on skiogmagi.booking,skiogmagi.booking_person,skiogmagi.oversikt,
  skiogmagi.room_allocation,skiogmagi.ticket_claim,skiogmagi.booking_rate_limit from anon,authenticated;

create function public.skiogmagi_availability() returns jsonb
language sql security invoker set search_path='' as $$
  select coalesce(jsonb_agg(jsonb_build_object('roomType',o.room_type,
    'remaining',greatest(0,o.capacity-(select count(*) from skiogmagi.room_allocation a where a.room_type=o.id)))), '[]'::jsonb)
  from skiogmagi.oversikt o where o.room_type in (3,4)
$$;

create function public.skiogmagi_rate_limit(p_bucket text) returns boolean
language plpgsql security invoker set search_path='' as $$
declare n integer;
begin
  delete from skiogmagi.booking_rate_limit where expires_at < now();
  insert into skiogmagi.booking_rate_limit values(p_bucket,1,now()+interval '15 minutes')
  on conflict(bucket) do update set attempts=skiogmagi.booking_rate_limit.attempts+1
  returning attempts into n;
  return n <= 40;
end $$;

create function public.skiogmagi_create_booking(p_request jsonb) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare
  b skiogmagi.booking; o skiogmagi.oversikt; person jsonb;
  n integer; i integer := 0; person_id bigint; allocation bigint;
  mode text := p_request->>'mode';
begin
  -- One lock for capacity, ticket claims, retries and staff assignment.
  perform pg_advisory_xact_lock(190112026);
  select * into b from skiogmagi.booking where request_key=(p_request->>'requestKey')::uuid;
  if found then
    if b.request_hash is distinct from p_request->>'requestHash' then raise exception 'idempotency_conflict'; end if;
    return jsonb_build_object('reference',b.public_reference,'status',b.status,'groupSize',b.group_size,
      'roomSize',(select room_type from skiogmagi.oversikt where id=b.room_type));
  end if;
  n := jsonb_array_length(p_request->'people');
  if mode is null or mode not in ('automatic','manual') or n not between 1 and 4
    or (mode='automatic' and n not in (3,4)) or (mode='manual' and n not in (1,2)) then
    raise exception 'invalid_booking';
  end if;
  if p_request->>'preference' is null or p_request->>'preference' not in ('women','men','contact') then raise exception 'invalid_booking'; end if;
  if mode='automatic' then
    select * into strict o from skiogmagi.oversikt where room_type=n;
    if o.capacity is null or o.capacity <= (select count(*) from skiogmagi.room_allocation where room_type=o.id) then raise exception 'sold_out'; end if;
    insert into skiogmagi.room_allocation(room_type) values(o.id) returning id into allocation;
  end if;
  insert into skiogmagi.booking(room_type,status,group_size,room_preference,note,request_key,request_hash,allocation_id)
  values(o.id,case when mode='automatic' then 'confirmed' else 'pending' end,n,p_request->>'preference',
    p_request->>'note',(p_request->>'requestKey')::uuid,p_request->>'requestHash',allocation) returning * into b;
  for person in select value from jsonb_array_elements(p_request->'people') loop
    i := i+1;
    if (mode='automatic' or i=1) and coalesce(person->>'ticketId','')='' then raise exception 'unverified_ticket'; end if;
    if nullif(person->>'ticketId','') is not null then
      if exists(select 1 from skiogmagi.ticket_claim where ticket_id=person->>'ticketId') then raise exception 'ticket_already_booked'; end if;
      insert into skiogmagi.ticket_claim values(person->>'ticketId',b.id);
    end if;
    insert into skiogmagi.booking_person(room_booking_id,is_responsible,firstname,lastname,mail,phone,stello_ticket_id)
    values(b.id,i=1,person->>'firstname',person->>'lastname',person->>'mail',person->>'phone',nullif(person->>'ticketId','')) returning id into person_id;
    if i=1 then update skiogmagi.booking set responsible_person_id=person_id where id=b.id; end if;
  end loop;
  return jsonb_build_object('reference',b.public_reference,'status',b.status,'groupSize',n,
    'roomSize',case when mode='automatic' then n else null end);
end $$;

create function public.skiogmagi_admin_list() returns jsonb
language sql security invoker set search_path='' as $$
  select coalesce(jsonb_agg(jsonb_build_object('id',b.id,'reference',b.public_reference,
    'status',b.status,'groupSize',b.group_size,'preference',b.room_preference,'note',b.note,
    'allocationId',b.allocation_id,'staffNote',b.staff_note,'createdAt',b.created_at,
    'people',(select jsonb_agg(jsonb_build_object('firstname',p.firstname,'lastname',p.lastname,
      'mail',p.mail,'phone',p.phone,'responsible',p.is_responsible)) from skiogmagi.booking_person p where p.room_booking_id=b.id)
  ) order by b.created_at desc),'[]'::jsonb) from skiogmagi.booking b
$$;

create function public.skiogmagi_assign_room(p_ids bigint[],p_room_type integer,p_note text,p_preferences_confirmed boolean) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare n integer; k integer; preferences integer; contact boolean; o skiogmagi.oversikt; allocation bigint;
begin
  perform pg_advisory_xact_lock(190112026);
  if p_room_type is null or p_room_type not in (3,4) or coalesce(cardinality(p_ids),0) not between 1 and 4 then raise exception 'invalid_assignment'; end if;
  select count(*),sum(group_size),count(distinct room_preference),bool_or(room_preference='contact')
    into k,n,preferences,contact from skiogmagi.booking where id=any(p_ids) and status='pending';
  if k <> cardinality(p_ids) or n <> p_room_type then raise exception 'invalid_assignment'; end if;
  if not coalesce(p_preferences_confirmed,false) or coalesce(length(trim(p_note)),0)<5 then raise exception 'confirm_preferences'; end if;
  -- Different/unspecified preferences always need personal clarification; the audit note records it.
  if (preferences>1 or contact) and coalesce(length(trim(p_note)),0)<15 then raise exception 'clarify_preferences'; end if;
  select * into strict o from skiogmagi.oversikt where room_type=p_room_type;
  if o.capacity is null or o.capacity <= (select count(*) from skiogmagi.room_allocation where room_type=o.id) then raise exception 'sold_out'; end if;
  insert into skiogmagi.room_allocation(room_type) values(o.id) returning id into allocation;
  update skiogmagi.booking set room_type=o.id,status='confirmed',allocation_id=allocation,staff_note=p_note where id=any(p_ids);
  return jsonb_build_object('allocationId',allocation,'status','confirmed');
end $$;

create function public.skiogmagi_cancel_booking(p_id bigint,p_note text) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare a bigint;
begin
  perform pg_advisory_xact_lock(190112026);
  if coalesce(length(trim(p_note)),0)<5 then raise exception 'note_required'; end if;
  select allocation_id into a from skiogmagi.booking where id=p_id and status<>'cancelled';
  if not found then raise exception 'invalid_booking'; end if;
  update skiogmagi.booking set status='cancelled',allocation_id=null,staff_note=p_note where id=p_id;
  delete from skiogmagi.ticket_claim where booking_id=p_id;
  if a is not null and not exists(select 1 from skiogmagi.booking where allocation_id=a) then
    delete from skiogmagi.room_allocation where id=a;
  end if;
  return jsonb_build_object('status','cancelled');
end $$;

revoke all on function public.skiogmagi_availability(),public.skiogmagi_rate_limit(text),
  public.skiogmagi_create_booking(jsonb),public.skiogmagi_admin_list(),
  public.skiogmagi_assign_room(bigint[],integer,text,boolean),public.skiogmagi_cancel_booking(bigint,text) from public,anon,authenticated;
grant execute on function public.skiogmagi_availability(),public.skiogmagi_rate_limit(text),
  public.skiogmagi_create_booking(jsonb),public.skiogmagi_admin_list(),
  public.skiogmagi_assign_room(bigint[],integer,text,boolean),public.skiogmagi_cancel_booking(bigint,text) to service_role;
