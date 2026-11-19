-- Run with a privileged SQL connection. All fixtures and capacity changes roll back.
begin;
update skiogmagi.oversikt set capacity=1 where room_type in(3,4);
set local role service_role;
do $$
declare p jsonb; r jsonb; r2 jsonb; ids bigint[]; first_id bigint; before_count bigint;
begin
  p:=jsonb_build_object('requestKey',gen_random_uuid(),'requestHash','test-auto','mode','automatic','preference','contact','note','TEST',
    'people','[{"firstname":"Test","lastname":"A","ticketId":"__test_A"},{"firstname":"Test","lastname":"B","ticketId":"__test_B"},{"firstname":"Test","lastname":"C","ticketId":"__test_C"}]'::jsonb);
  r:=public.skiogmagi_create_booking(p);
  assert r->>'status'='confirmed','automatic booking must confirm';
  r2:=public.skiogmagi_create_booking(p);
  assert r=r2,'idempotent retry must return same receipt';
  select id into first_id from skiogmagi.booking where public_reference=(r->>'reference')::uuid;
  begin perform public.skiogmagi_create_booking(p||jsonb_build_object('requestHash','changed'));raise exception 'TEST FAILED: conflicting retry accepted';
  exception when others then if sqlerrm<>'idempotency_conflict' then raise;end if;end;
  begin perform public.skiogmagi_create_booking(p||jsonb_build_object('requestKey',gen_random_uuid()));raise exception 'TEST FAILED: sold out accepted';
  exception when others then if sqlerrm<>'sold_out' then raise;end if;end;
  select count(*) into before_count from skiogmagi.room_allocation;
  p:=jsonb_build_object('requestKey',gen_random_uuid(),'requestHash','test-manual','mode','manual','preference','women','note','TEST',
    'people','[{"firstname":"Test","lastname":"D","ticketId":"__test_D"}]'::jsonb);
  r:=public.skiogmagi_create_booking(p);assert r->>'status'='pending';
  select array[id] into ids from skiogmagi.booking where public_reference=(r->>'reference')::uuid;
  p:=p||jsonb_build_object('requestKey',gen_random_uuid(),'people','[{"firstname":"Test","lastname":"E","ticketId":"__test_E"},{"firstname":"Test","lastname":"F"}]'::jsonb);
  r:=public.skiogmagi_create_booking(p);
  select ids||id into ids from skiogmagi.booking where public_reference=(r->>'reference')::uuid;
  p:=p||jsonb_build_object('requestKey',gen_random_uuid(),'preference','men','people','[{"firstname":"Test","lastname":"G","ticketId":"__test_G"}]'::jsonb);
  r:=public.skiogmagi_create_booking(p);
  select ids||id into ids from skiogmagi.booking where public_reference=(r->>'reference')::uuid;
  assert before_count=(select count(*) from skiogmagi.room_allocation),'manual must not consume rooms';
  begin perform public.skiogmagi_create_booking(p||jsonb_build_object('requestKey',gen_random_uuid()));raise exception 'TEST FAILED: reused ticket accepted';
  exception when others then if sqlerrm<>'ticket_already_booked' then raise;end if;end;
  begin perform public.skiogmagi_assign_room(ids,4,'Avklart',false);raise exception 'TEST FAILED: unchecked preferences accepted';
  exception when others then if sqlerrm<>'confirm_preferences' then raise;end if;end;
  begin perform public.skiogmagi_assign_room(ids,4,'Avklart',true);raise exception 'TEST FAILED: short mixed preference note accepted';
  exception when others then if sqlerrm<>'clarify_preferences' then raise;end if;end;
  r:=public.skiogmagi_assign_room(ids,4,'Alle billetter og romønsker er kontrollert og personlig avtalt',true);
  r2:=public.skiogmagi_create_booking(p);
  assert r2->>'roomSize'='4' and r2->>'groupSize'='1','retry must distinguish group size from assigned room size';
  assert before_count+1=(select count(*) from skiogmagi.room_allocation),'assignment consumes exactly one room';
  perform public.skiogmagi_cancel_booking(ids[1],'Test avbestilling');
  assert before_count+1=(select count(*) from skiogmagi.room_allocation),'partial cancellation must not release shared room';
  perform public.skiogmagi_cancel_booking(ids[2],'Test avbestilling');
  perform public.skiogmagi_cancel_booking(ids[3],'Test avbestilling');
  assert before_count=(select count(*) from skiogmagi.room_allocation),'last cancellation releases room';
  perform public.skiogmagi_cancel_booking(first_id,'Test avbestilling');
  assert not exists(select 1 from skiogmagi.ticket_claim where ticket_id like '__test_%'),'claims must be released';
  p:=jsonb_build_object('requestKey',gen_random_uuid(),'requestHash','duplicate','mode','automatic','preference','contact',
    'people','[{"ticketId":"__test_X"},{"ticketId":"__test_X"},{"ticketId":"__test_Y"}]'::jsonb);
  begin perform public.skiogmagi_create_booking(p);raise exception 'TEST FAILED: duplicate in same room accepted';
  exception when others then if sqlerrm<>'ticket_already_booked' then raise;end if;end;
  assert not exists(select 1 from skiogmagi.room_allocation),'failed booking must roll back allocation';
  assert not exists(select 1 from skiogmagi.ticket_claim where ticket_id='__test_X'),'failed booking must roll back claims';
  p:=p||jsonb_build_object('requestKey',gen_random_uuid(),'people','[{"ticketId":"__test_W"},{"ticketId":"__test_X"},{"ticketId":"__test_Y"},{"ticketId":"__test_Z"}]'::jsonb);
  r:=public.skiogmagi_create_booking(p);
  assert r->>'groupSize'='4' and r->>'status'='confirmed','four-person room must confirm';
end $$;
reset role;
do $$ begin
  assert not has_function_privilege('anon','public.skiogmagi_create_booking(jsonb)','execute');
  assert not has_function_privilege('authenticated','public.skiogmagi_admin_list()','execute');
  assert not has_table_privilege('anon','skiogmagi.booking_person','select');
end $$;
rollback;
