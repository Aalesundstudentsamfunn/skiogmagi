import test, { type TestContext } from 'node:test';
import type { AdminBooking, Availability, BookingMode } from '../src/lib/booking/types.ts';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { unlink } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createLocalTestHandler, isLocalTestAllowed, TEST_ADMIN_TOKEN } from '../src/lib/booking/local-test.ts';

function setup(t: TestContext) {
  const filename=resolve('.booking-test',`test-${randomUUID()}.json`);
  t.after(()=>unlink(filename).catch(e=>{if(e.code!=='ENOENT')throw e;}));
  const settings={isDev:true,env:{BOOKING_TEST_MODE:'true'},hostname:'localhost',clientAddress:'127.0.0.1',filename};
  const make=()=>createLocalTestHandler(settings);
  let handler=make(),next=1000;
  const request=async(action: string,body?: unknown,admin=false)=>{
    const response=await handler(new Request(`http://localhost:4321/api/booking/${action}`,{
      method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',Origin:'http://localhost:4321',...(admin?{Authorization:`Bearer ${TEST_ADMIN_TOKEN}`}:{})},
      ...(body===undefined?{}:{body:JSON.stringify(body)}),
    }));return {status:response.status,data:await response.json()};
  };
  const payload=async(n: number,mode: BookingMode = 'automatic')=>{
    const people=[];
    for(let i=0;i<n;i++) {
      const reference=`TEST-${next++}`;
      const proof=(mode==='automatic'||i===0)?(await request('verify',{reference})).data.proof:undefined;
      people.push({firstname:'Test',lastname:`Person ${i}`,mail:'test@example.no',phone:'+4712345678',reference,proof});
    }
    return {requestKey:randomUUID(),mode,people,preference:'women',accepted:true,note:'Test'};
  };
  return {settings,request,payload,reload:()=>{handler=make();}};
}

test('local mode requires dev, explicit flag, local host AND local client',()=>{
  const valid={isDev:true,env:{BOOKING_TEST_MODE:'true'},hostname:'localhost',clientAddress:'127.0.0.1'};
  assert.equal(isLocalTestAllowed(valid),true);
  for(const override of [{isDev:false},{env:{BOOKING_TEST_MODE:'false'}},{hostname:'skiogmagi.no'},{clientAddress:'192.168.1.10'},{clientAddress:'unknown'}]) {
    assert.equal(isLocalTestAllowed({...valid,...override}),false);
    assert.throws(()=>createLocalTestHandler({...valid,...override,filename:'unused.json'}),/not allowed/);
  }
});
test('whole local flow: 3/4 rooms, 1+2 manual assignment, staff cancellation and reset',async t=>{
  const h=setup(t);
  assert.equal((await h.request('verify',{reference:'TEST-INVALID'})).status,422);
  for(const n of [3,4]) {
    const result=await h.request('submit',await h.payload(n));
    assert.equal(result.status,200);assert.equal(result.data.status,'confirmed');assert.equal(result.data.roomSize,n);
  }
  const before=(await h.request('availability')).data;
  for(const n of [1,2]) {
    const result=await h.request('submit',await h.payload(n,'manual'));
    assert.equal(result.data.status,'pending');
  }
  assert.deepEqual((await h.request('availability')).data,before);
  assert.equal((await h.request('admin')).status,401);
  const list: AdminBooking[] = (await h.request('admin',undefined,true)).data;
  const ids=list.filter(b=>b.status==='pending').map(b=>b.id);
  const assignment={action:'assign',ids,roomType:3,note:'Billetter og romønsker kontrollert med alle',preferencesConfirmed:false};
  assert.equal((await h.request('admin',assignment,true)).data.error,'confirm_preferences');
  assignment.preferencesConfirmed=true;
  assert.equal((await h.request('admin',assignment,true)).data.status,'confirmed');
  assert.equal((await h.request('availability')).data.find((r: Availability)=>r.roomType===3).remaining,0);
  for(let i=0;i<ids.length;i++) {
    assert.equal((await h.request('admin',{action:'cancel',id:ids[i],note:'Test avbestilling'},true)).status,200);
    assert.equal((await h.request('availability')).data.find((r: Availability)=>r.roomType===3).remaining,i===0?0:1);
  }
  assert.equal((await h.request('reset',{})).status,401);
  assert.equal((await h.request('reset',{},true)).status,200);
  assert.deepEqual((await h.request('admin',undefined,true)).data,[]);
  assert.deepEqual((await h.request('availability')).data.map((r: Availability)=>r.remaining),[2,2]);
});
test('local persistence, retries and duplicate claims work across handler reloads',async t=>{
  const h=setup(t),payload=await h.payload(3);
  const initial=await h.request('submit',payload);h.reload();
  assert.deepEqual((await h.request('submit',payload)).data,initial.data);
  assert.equal((await h.request('admin',undefined,true)).data.length,1);
  assert.equal((await h.request('submit',{...payload,requestKey:randomUUID()})).data.error,'ticket_already_booked');
  assert.equal((await h.request('submit',{...payload,note:'changed'})).data.error,'idempotency_conflict');
});
test('parallel local reservations cannot overbook the last rooms',async t=>{
  const h=setup(t);
  const payloads=[];for(let i=0;i<3;i++)payloads.push(await h.payload(4));
  const responses=await Promise.all(payloads.map(p=>h.request('submit',p)));
  assert.equal(responses.filter(r=>r.status===200).length,2);
  assert.equal(responses.filter(r=>r.data.error==='sold_out').length,1);
  assert.equal((await h.request('admin',undefined,true)).data.length,2);
});
