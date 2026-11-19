import { api, errorMessage } from './booking-api.js';
import { showLocalTestMode } from './booking-test-mode.js';
void showLocalTestMode();
const $ = selector => document.querySelector(selector);
const form = $('#booking-form');
const leadForm = $('#ticket-form');
const leadRef = $('#lead-reference');
const fields = [...document.querySelectorAll('[data-person]')];
const proofs = new Map();
let choice = '';
let requestKey = crypto.randomUUID();
const error = message => {
  const panel = $('#booking-error'); panel.textContent = message; panel.hidden = false; panel.focus();
};
const clearError = () => { $('#booking-error').hidden = true; };
const count = () => choice === 'manual' ? Number($('#manual-count').value) : Number(choice || 0);
const invalidate = () => { requestKey = crypto.randomUUID(); };
async function availability() {
  try {
    const rooms = await api('availability');
    for (const size of [3,4]) {
      const room = rooms.find(room => Number(room.roomType) === size);
      const label = $(`[data-availability="${size}"]`);
      const available = room && room.remaining > 0;
      label.textContent = room ? `${room.remaining} rom ledige` : 'Tilgjengelighet er ikke avklart';
      $(`input[name="choice"][value="${size}"]`).disabled = !available;
    }
  } catch {
    document.querySelectorAll('[data-availability]').forEach(el => { el.textContent = 'Kunne ikke hente ledige rom. Prøv igjen senere.'; });
    for (const size of [3,4]) $(`input[name="choice"][value="${size}"]`).disabled = true;
  }
}
leadForm.addEventListener('submit', async event => {
  event.preventDefault(); clearError();
  const reference = leadRef.value.trim();
  $('#lead-verify').disabled = true;
  $('#lead-status').textContent = 'Kontrollerer billetten …';
  try {
    const result = await api('verify',{reference});
    if (leadRef.value.trim() !== reference) { $('#lead-status').textContent = 'ID-en ble endret. Bekreft på nytt.'; return; }
    proofs.set(1,{reference,proof:result.proof});
    leadRef.readOnly = true;
    $('#lead-verify').hidden = true; $('#lead-change').hidden = false;
    $('#lead-status').textContent = 'Billetten er bekreftet. Velg hvordan dere reiser.';
    form.hidden = false; await availability();
  } catch (e) { $('#lead-status').textContent = ''; error(errorMessage(e)); }
  finally { $('#lead-verify').disabled = false; }
});
$('#lead-change').addEventListener('click', () => {
  proofs.delete(1); leadRef.readOnly = false; leadRef.focus(); form.hidden = true;
  $('#lead-change').hidden = true; $('#lead-verify').hidden = false;
  $('#lead-status').textContent = ''; invalidate();
});
function updatePeople() {
  const manual = choice === 'manual';
  $('#manual-options').hidden = !manual;
  $('#preference').required = manual;
  $('#people-section').hidden = !choice;
  fields.forEach((field,index) => {
    const active = index < count(); field.hidden = !active; field.disabled = !active;
    const ticket = field.querySelector('[data-ticket-box]');
    if (ticket) {
      ticket.hidden = manual;
      field.querySelector('[data-reference]').required = active && !manual;
    }
  });
  $('#booking-submit').textContent = manual ? 'Send forespørsel om romplass' : 'Bekreft rombooking';
  invalidate();
}
document.querySelectorAll('input[name="choice"]').forEach(input => input.addEventListener('change', () => { choice=input.value; updatePeople(); }));
$('#manual-count').addEventListener('change',updatePeople);
fields.forEach((field,index) => {
  const referenceInput = field.querySelector('[data-reference]');
  const button = field.querySelector('[data-verify]');
  if (!button) return;
  referenceInput.addEventListener('input', () => { proofs.delete(index+1); field.querySelector('[data-ticket-status]').textContent = ''; });
  button.addEventListener('click', async () => {
    clearError();
    if (!referenceInput.reportValidity()) return;
    const reference = referenceInput.value.trim();
    button.disabled = true; const status=field.querySelector('[data-ticket-status]'); status.textContent='Kontrollerer …';
    try {
      const result=await api('verify',{reference});
      if(referenceInput.value.trim() !== reference) { status.textContent='ID-en ble endret. Bekreft på nytt.'; return; }
      proofs.set(index+1,{reference,proof:result.proof}); status.textContent='Billetten er bekreftet.';
    } catch(e) { proofs.delete(index+1); status.textContent='Billetten er ikke bekreftet.'; error(errorMessage(e)); }
    finally { button.disabled=false; }
  });
});
form.addEventListener('input',invalidate);
form.addEventListener('change',invalidate);
form.addEventListener('submit',async event => {
  event.preventDefault(); clearError();
  if (!choice || !form.reportValidity()) return;
  const people=fields.slice(0,count()).map((field,index) => {
    const person=Object.fromEntries([...field.querySelectorAll('[data-field]')].map(input => [input.dataset.field,input.value]));
    return {...person,...proofs.get(index+1)};
  });
  if (people.some((person,index) => (choice!=='manual' || index===0) && !person.proof)) {
    error('Bekreft billetten til hver deltaker før du sender inn.'); return;
  }
  const payload={requestKey,mode:choice==='manual'?'manual':'automatic',people,
    preference:choice==='manual'?$('#preference').value:'contact',note:$('#booking-note').value,accepted:$('#booking-accepted').checked};
  $('#booking-fields').disabled=true;
  $('#booking-submit').textContent='Registrerer …';
  try {
    const result=await api('submit',payload);
    form.hidden=true; $('#ticket-step').hidden=true;
    const confirmed=result.status==='confirmed';
    $('#receipt-title').textContent=confirmed?'Rommet er booket!':'Vi har mottatt romønsket ditt';
    $('#receipt-message').textContent=confirmed?`Romplass for ${result.groupSize} personer er bekreftet på et ${result.roomSize || result.groupSize}-mannsrom. Du er romansvarlig og kontaktperson.`:
      'Dere står i kø for manuell romfordeling. Et rom er ikke tildelt ennå. Vi kontakter romansvarlig for å avklare og bekrefte romplassen.';
    $('#receipt-reference').textContent=result.reference;
    if(result.status==='cancelled') {
      $('#receipt-title').textContent='Denne registreringen er avbestilt';
      $('#receipt-message').textContent='Registreringen er tidligere avbestilt av arrangøren. Kontakt arrangøren ved spørsmål.';
    }
    $('#booking-receipt').hidden=false; $('#booking-receipt').focus();
    proofs.clear(); form.reset(); leadRef.value='';
  } catch(e) { error(errorMessage(e)); if(e.code==='sold_out') await availability(); }
  finally { $('#booking-fields').disabled=false; $('#booking-submit').textContent=choice==='manual'?'Send forespørsel om romplass':'Bekreft rombooking'; }
});
$('#receipt-print').addEventListener('click',() => window.print());
