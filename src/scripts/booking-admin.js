import { api, errorMessage } from './booking-api.js';
import { showLocalTestMode } from './booking-test-mode.js';
const $=selector=>document.querySelector(selector);
let token='', bookings=[], busy=false;
const selected=new Set();
const statuses={pending:'Venter på romfordeling',confirmed:'Bekreftet rom',cancelled:'Avbestilt'};
const preferences={women:'Ønsker å dele med kvinner',men:'Ønsker å dele med menn',contact:'Må avklares personlig'};
function message(text) { $('#admin-message').textContent=text; $('#admin-message').hidden=false; }
function selection() {
  const total=bookings.filter(b=>selected.has(b.id)).reduce((sum,b)=>sum+b.groupSize,0);
  $('#admin-selected').textContent=`${selected.size} forespørsler valgt · ${total} personer`;
}
function line(parent,text) { const p=document.createElement('p'); p.textContent=text; parent.append(p); }
function render() {
  const list=$('#admin-list'); list.replaceChildren(); selected.clear(); selection();
  if(!bookings.length) line(list,'Ingen bookinger ennå.');
  bookings.forEach(booking=>{
    const card=document.createElement('article'); card.className='booking-admin-card';
    if(booking.status==='pending') {
      const label=document.createElement('label'), input=document.createElement('input');
      input.type='checkbox'; input.addEventListener('change',()=>{input.checked?selected.add(booking.id):selected.delete(booking.id);selection();});
      label.append(input,document.createTextNode(` Velg forespørsel #${booking.id}`));card.append(label);
    }
    line(card,`${statuses[booking.status] || booking.status} · ${booking.groupSize} personer · ${booking.reference}`);
    line(card,preferences[booking.preference] || 'Romønske ikke angitt');
    if(booking.allocationId) line(card,`Romgruppe #${booking.allocationId} (internt nummer)`);
    (booking.people || []).forEach(person=>line(card,`${person.firstname} ${person.lastname}${person.responsible?' · romansvarlig':''} · ${person.mail || 'ingen e-post'} · ${person.phone || 'ingen telefon'}`));
    if(booking.note) line(card,`Romønsker: ${booking.note}`);
    if(booking.staffNote) line(card,`Saksnotat: ${booking.staffNote}`);
    if(booking.status!=='cancelled') {
      const cancel=document.createElement('button');cancel.type='button';cancel.className='booking-secondary';cancel.textContent='Avbestill denne registreringen';
      cancel.addEventListener('click',()=>{
        const note=$('#admin-note').value.trim();
        if(note.length<5) {message('Skriv en begrunnelse i saksnotatet først.');return;}
        if(confirm(`Avbestille registrering #${booking.id}? Billettene frigis. Kontakt romansvarlig om endringen.`)) void mutate({action:'cancel',id:booking.id,note});
      });card.append(cancel);
    }
    list.append(card);
  });
}
async function refresh() {
  const [data,rooms]=await Promise.all([api('admin',undefined,token),api('availability')]);
  bookings=data;render(); $('#admin-workspace').hidden=false;$('#admin-login').hidden=true;
  $('#admin-capacity').textContent=rooms.map(r=>`${r.roomType}-mannsrom: ${r.remaining} ledige`).join(' · ');
}
async function mutate(body) {
  if(busy)return;busy=true;$('#admin-workspace').inert=true;
  try {await api('admin',body,token);await refresh();$('#admin-assignment').reset();message('Lagret. Kontakt de berørte romansvarlige; ingen e-post sendes automatisk.');}
  catch(e) {message(errorMessage(e));}
  finally{busy=false;$('#admin-workspace').inert=false;}
}
$('#admin-login').addEventListener('submit',async event=>{
  event.preventDefault();token=$('#admin-token').value;$('#admin-token').value='';
  try{await refresh();message('Bookinger er hentet.');}catch(e){token='';message(errorMessage(e));}
});
$('#admin-refresh').addEventListener('click',()=>{void refresh().catch(e=>message(errorMessage(e)));});
$('#admin-logout').addEventListener('click',()=>{token='';bookings=[];selected.clear();$('#admin-list').replaceChildren();$('#admin-workspace').hidden=true;$('#admin-login').hidden=false;message('Du er logget ut.');});
$('#admin-assignment').addEventListener('submit',event=>{
  event.preventDefault();void mutate({action:'assign',ids:[...selected],roomType:Number($('#admin-room').value),note:$('#admin-note').value,preferencesConfirmed:$('#admin-checked').checked});
});
window.addEventListener('pagehide',()=>{token='';});
void showLocalTestMode().then(enabled=>{
  if(!enabled)return;
  const reset=document.createElement('button');reset.type='button';reset.className='booking-secondary';reset.textContent='Nullstill alle lokale testbookinger';
  reset.addEventListener('click',async()=>{
    if(busy || !confirm('Slette alle lokale testbookinger og gjenopprette ledige testrom?'))return;
    busy=true;reset.disabled=true;
    try{await api('reset',{},token);await refresh();message('Lokale testdata er nullstilt. Ingen ekte bookinger er berørt.');}
    catch(e){message(errorMessage(e));}finally{busy=false;reset.disabled=false;}
  });
  document.querySelector('#admin-workspace').prepend(reset);
});
