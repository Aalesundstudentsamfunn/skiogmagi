import { randomUUID, createHash, timingSafeEqual } from 'node:crypto';
import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { BookingError } from './errors.mjs';
import { createBookingService } from './service.mjs';

export const TEST_ADMIN_TOKEN = 'skiogmagi-local-test-admin-1234567890';
const queues = globalThis[Symbol.for('skiogmagi.localBookingQueues')] ||= new Map();
const empty = () => ({ version:1, capacities:{3:2,4:2}, bookings:[], allocations:[], claims:{}, rates:{}, nextId:1, nextAllocation:1 });
const receipt = booking => ({reference:booking.reference,status:booking.status,groupSize:booking.groupSize,roomSize:booking.roomSize});
const remaining = (state,size) => Math.max(0,state.capacities[size]-state.allocations.filter(a=>a.roomSize===size).length);
const fail = code => {throw new BookingError(code,409);};

// Local files only. A shared queue serializes mutations across requests and hot reloads.
export function createLocalStore(filename) {
  filename=resolve(filename);
  async function run(name,args={}) {
    const previous=queues.get(filename) || Promise.resolve();
    const operation=previous.catch(()=>{}).then(async()=>{
      let state;
      try {state=JSON.parse(await readFile(filename,'utf8'));}
      catch(e) {if(e.code!=='ENOENT')throw e;state=empty();}
      let result;
      if(name==='reset') {state=empty();result={ok:true};}
      else if(name==='skiogmagi_availability') return [3,4].map(size=>({roomType:size,remaining:remaining(state,size)}));
      else if(name==='skiogmagi_admin_list') return state.bookings.slice().reverse();
      else if(name==='skiogmagi_rate_limit') {
        const now=Date.now();
        for(const [key,value] of Object.entries(state.rates)) if(value.expires<now)delete state.rates[key];
        const rate=state.rates[args.p_bucket] ||= {attempts:0,expires:now+900000};
        result=++rate.attempts<=40;
      } else if(name==='skiogmagi_create_booking') {
        const p=args.p_request;
        const existing=state.bookings.find(b=>b.requestKey===p.requestKey);
        if(existing) {if(existing.requestHash!==p.requestHash)fail('idempotency_conflict');return receipt(existing);}
        const ticketIds=p.people.map(p=>p.ticketId).filter(Boolean);
        if(ticketIds.some(id=>state.claims[id]) || new Set(ticketIds).size!==ticketIds.length)fail('ticket_already_booked');
        const automatic=p.mode==='automatic';
        const size=p.people.length;
        if(automatic && remaining(state,size)<=0)fail('sold_out');
        const allocationId=automatic?state.nextAllocation++:null;
        if(automatic)state.allocations.push({id:allocationId,roomSize:size});
        const booking={id:state.nextId++,reference:randomUUID(),status:automatic?'confirmed':'pending',
          groupSize:size,roomSize:automatic?size:null,preference:p.preference,note:p.note,staffNote:null,allocationId,
          createdAt:new Date().toISOString(),requestKey:p.requestKey,requestHash:p.requestHash,
          people:p.people.map((person,i)=>({...person,responsible:i===0}))};
        state.bookings.push(booking);
        for(const id of ticketIds)state.claims[id]=booking.id;
        result=receipt(booking);
      } else if(name==='skiogmagi_assign_room') {
        const ids=args.p_ids, size=args.p_room_type, note=args.p_note.trim();
        const bookings=state.bookings.filter(b=>ids.includes(b.id) && b.status==='pending');
        if(bookings.length!==ids.length || new Set(ids).size!==ids.length || bookings.reduce((n,b)=>n+b.groupSize,0)!==size)fail('invalid_assignment');
        if(!args.p_preferences_confirmed || note.length<5)fail('confirm_preferences');
        if((new Set(bookings.map(b=>b.preference)).size>1 || bookings.some(b=>b.preference==='contact')) && note.length<15)fail('clarify_preferences');
        if(remaining(state,size)<=0)fail('sold_out');
        const allocationId=state.nextAllocation++;
        state.allocations.push({id:allocationId,roomSize:size});
        for(const b of bookings)Object.assign(b,{status:'confirmed',roomSize:size,allocationId,staffNote:note});
        result={allocationId,status:'confirmed'};
      } else if(name==='skiogmagi_cancel_booking') {
        const b=state.bookings.find(b=>b.id===args.p_id && b.status!=='cancelled');
        if(!b)fail('invalid_booking');
        if(args.p_note.trim().length<5)fail('note_required');
        const allocation=b.allocationId;
        Object.assign(b,{status:'cancelled',allocationId:null,staffNote:args.p_note});
        for(const [id,booking] of Object.entries(state.claims))if(booking===b.id)delete state.claims[id];
        if(!state.bookings.some(b=>b.allocationId===allocation))state.allocations=state.allocations.filter(a=>a.id!==allocation);
        result={status:'cancelled'};
      } else throw new Error('Unknown local test operation');
      await mkdir(dirname(filename),{recursive:true});
      const temporary=`${filename}.tmp`;
      await writeFile(temporary,JSON.stringify(state,null,2),{mode:0o600});
      await rename(temporary,filename);
      return result;
    });
    queues.set(filename,operation.catch(()=>{}));
    return operation;
  }
  return run;
}

export function isLocalTestAllowed({isDev,env,hostname,clientAddress}) {
  return isDev===true && env.BOOKING_TEST_MODE==='true'
    && ['localhost','127.0.0.1','[::1]'].includes(hostname)
    && ['127.0.0.1','::1','::ffff:127.0.0.1'].includes(clientAddress);
}

export function createLocalTestHandler({isDev,env,hostname,clientAddress,filename}) {
  if(!isLocalTestAllowed({isDev,env,hostname,clientAddress}))throw new Error('Local booking test mode is not allowed');
  const localEnv={...env,BOOKING_TOKEN_SECRET:'skiogmagi-local-proof-secret-for-test-mode-only',
    STELLO_EVENT_ID:'local-booking-test',ROOM_ADMIN_TOKEN:TEST_ADMIN_TOKEN};
  const rpc=createLocalStore(filename);
  const handler=createBookingService(localEnv,{
    rpc,
    verifyTicket:async reference=>({ticketId:reference.trim().toUpperCase(),eventId:localEnv.STELLO_EVENT_ID,
      valid:/^TEST-\d{3,6}$/i.test(reference.trim())}),
  });
  return async request=>{
    const action=new URL(request.url).pathname.split('/').filter(Boolean).at(-1);
    if(action==='reset' && request.method==='POST') {
      const hash=value=>createHash('sha256').update(value).digest();
      const token=request.headers.get('Authorization')?.replace(/^Bearer /,'') || '';
      const origin=request.headers.get('Origin');
      if((origin && origin!==new URL(request.url).origin) || !timingSafeEqual(hash(token),hash(TEST_ADMIN_TOKEN))) {
        return new Response(JSON.stringify({error:'unauthorized'}),{status:401,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
      }
      await rpc('reset');
      return new Response(JSON.stringify({ok:true}),{headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
    }
    return handler(request,clientAddress);
  };
}
