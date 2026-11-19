import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { createBookingService } from '../src/lib/booking/service.mjs';
const env={BOOKING_TOKEN_SECRET:'test-secret-'.repeat(4),STELLO_EVENT_ID:'ski-2027',ROOM_ADMIN_TOKEN:'admin-'.repeat(8)};
function harness(overrides={}) {
  const calls=[];let time=1000000;let revoked=false;
  const handler=createBookingService(env,{
    now:()=>time,
    verifyTicket:async ref=>({ticketId:ref,eventId:env.STELLO_EVENT_ID,valid:!revoked}),
    rpc:async(name,args)=>{calls.push({name,args});if(name==='skiogmagi_rate_limit')return true;return {reference:'receipt',status:'confirmed'};},...overrides,
  });
  const request=async(action,body,headers={})=>{
    const response=await handler(new Request(`https://skiogmagi.no/api/booking/${action}`,{
      method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',...headers},...(body===undefined?{}:{body:JSON.stringify(body)}),
    }),'127.0.0.1');return {status:response.status,data:await response.json(),headers:response.headers};
  };
  const person=async id=>({firstname:'Test',lastname:'Person',mail:'test@example.no',phone:'+4712345678',reference:id,proof:(await request('verify',{reference:id})).data.proof});
  const payload=async(n=3,mode='automatic')=>({requestKey:randomUUID(),mode,preference:'women',accepted:true,note:'',people:await Promise.all(Array.from({length:n},(_,i)=>person(`ticket-${i}`)))});
  return {calls,request,payload,expire:()=>time+=1800001,revoke:()=>revoked=true};
}
test('automatic 3/4 groups verify every ticket and submit canonical identities',async()=>{
  for(const n of [3,4]) {const h=harness();const result=await h.request('submit',await h.payload(n));assert.equal(result.status,200);const call=h.calls.find(c=>c.name==='skiogmagi_create_booking');assert.equal(call.args.p_request.people.length,n);assert.equal(call.args.p_request.people[0].ticketId,'ticket-0');assert.ok(!JSON.stringify(call).includes('proof'));assert.match(result.headers.get('Cache-Control'),/no-store/);}
});
test('manual group of 1/2 needs only responsible ticket',async()=>{
  for(const n of [1,2]) {const h=harness();const body=await h.payload(n,'manual');if(n===2){delete body.people[1].proof;delete body.people[1].reference;}assert.equal((await h.request('submit',body)).status,200);if(n===2)assert.equal(h.calls.find(c=>c.name==='skiogmagi_create_booking').args.p_request.people[1].ticketId,null);}
});
test('reject incorrect group sizes and missing consent',async()=>{
  const h=harness();for(const [n,mode] of [[2,'automatic'],[3,'manual']])assert.equal((await h.request('submit',await h.payload(n,mode))).status,400);
  const p=await h.payload();p.accepted=false;assert.equal((await h.request('submit',p)).status,400);
});
test('reject duplicate ticket ids',async()=>{const h=harness();const p=await h.payload();p.people[1]={...p.people[0]};assert.equal((await h.request('submit',p)).data.error,'duplicate_ticket');});
test('reject proof tampering, expiry and substitution',async()=>{
  for(const kind of ['tampered','expired','changed']) {const h=harness();const p=await h.payload();if(kind==='tampered')p.people[0].proof+='x';if(kind==='expired')h.expire();if(kind==='changed')p.people[0].reference='another-ticket';assert.equal((await h.request('submit',p)).data.error,'verify_again');assert.ok(!h.calls.some(c=>c.name==='skiogmagi_create_booking'));}
});
test('recheck revoked ticket at final submission',async()=>{const h=harness();const p=await h.payload();h.revoke();assert.equal((await h.request('submit',p)).data.error,'invalid_ticket');});
test('wrong-event tickets never receive proof',async()=>{const h=harness({verifyTicket:async()=>({valid:true,eventId:'wrong',ticketId:'x'})});assert.equal((await h.request('verify',{reference:'x'})).status,422);});
test('unfinished Stello adapter fails closed',async()=>{const handler=createBookingService(env,{rpc:async()=>true});const result=await handler(new Request('https://skiogmagi.no/api/booking/verify',{method:'POST',body:JSON.stringify({reference:'x'})}));assert.equal(result.status,503);assert.equal((await result.json()).error,'stello_not_configured');});
test('rate limit rejects before verification',async()=>{const h=harness({rpc:async()=>false});assert.equal((await h.request('verify',{reference:'x'})).status,429);});
test('staff API requires secret and validates assignment ids',async()=>{
  const h=harness();assert.equal((await h.request('admin')).status,401);assert.equal((await h.request('admin',undefined,{Authorization:`Bearer ${env.ROOM_ADMIN_TOKEN}`})).status,200);
  assert.equal((await h.request('admin',{action:'assign',ids:['1'],roomType:3,note:'checked'}, {Authorization:`Bearer ${env.ROOM_ADMIN_TOKEN}`})).status,400);
});
test('reject cross-origin mutation',async()=>{const h=harness();assert.equal((await h.request('verify',{reference:'x'},{Origin:'https://evil.example'})).status,403);});
test('reject malformed people and invalid phone numbers',async()=>{const h=harness();const p=await h.payload();p.people[0].phone='-------';assert.equal((await h.request('submit',p)).status,400);p.people[0]=null;assert.equal((await h.request('submit',p)).status,400);});
test('retries retain the request key and content fingerprint',async()=>{const h=harness();const p=await h.payload();await h.request('submit',p);await h.request('submit',p);const calls=h.calls.filter(c=>c.name==='skiogmagi_create_booking');assert.equal(calls[0].args.p_request.requestKey,calls[1].args.p_request.requestKey);assert.equal(calls[0].args.p_request.requestHash,calls[1].args.p_request.requestHash);});
