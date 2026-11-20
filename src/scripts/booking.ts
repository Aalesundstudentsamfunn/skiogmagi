import type { BookingSubmission, PersonInput } from '../lib/booking/types.ts';
import { isRoomPreference } from '../lib/booking/types.ts';
import { api, BookingApiError, errorMessage } from './booking-api.ts';
import { showLocalTestMode } from './booking-test-mode.ts';
void showLocalTestMode();
function $<T extends HTMLElement = HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error('Missing booking element: ' + selector);
  return element;
}
const form = $<HTMLFormElement>('#booking-form');
const leadForm = $<HTMLFormElement>('#ticket-form');
const leadRef = $<HTMLInputElement>('#lead-reference');
const fields = [...document.querySelectorAll<HTMLFieldSetElement>('[data-person]')];
const proofs = new Map<number, { reference: string; proof: string }>();
let choice = '';
let requestKey = crypto.randomUUID();
const error = (message: string) => {
  const panel = $('#booking-error'); panel.textContent = message; panel.hidden = false; panel.focus();
};
const clearError = () => { $('#booking-error').hidden = true; };
const count = () => choice === 'manual' ? Number($<HTMLSelectElement>('#manual-count').value) : Number(choice || 0);
const invalidate = () => { requestKey = crypto.randomUUID(); };
async function availability() {
  try {
    const rooms = await api('availability');
    for (const size of [3,4]) {
      const room = rooms.find(room => Number(room.roomType) === size);
      const label = $(`[data-availability="${size}"]`);
      const available = room && room.remaining > 0;
      label.textContent = room ? `${room.remaining} rom ledige` : 'Tilgjengelighet er ikke avklart';
      $<HTMLInputElement>(`input[name="choice"][value="${size}"]`).disabled = !available;
    }
  } catch {
    document.querySelectorAll('[data-availability]').forEach(el => { el.textContent = 'Kunne ikke hente ledige rom. Prøv igjen senere.'; });
    for (const size of [3,4]) $<HTMLInputElement>(`input[name="choice"][value="${size}"]`).disabled = true;
  }
}
leadForm.addEventListener('submit', async event => {
  event.preventDefault(); clearError();
  const reference = leadRef.value.trim();
  $<HTMLButtonElement>('#lead-verify').disabled = true;
  $('#lead-status').textContent = 'Kontrollerer billetten …';
  try {
    const result = await api('verify',{reference});
    if (leadRef.value.trim() !== reference) { $('#lead-status').textContent = 'ID-en ble endret. Bekreft på nytt.'; return; }
    proofs.set(1,{reference,proof:result.proof});
    leadRef.readOnly = true;
    $<HTMLButtonElement>('#lead-verify').hidden = true; $('#lead-change').hidden = false;
    $('#lead-status').textContent = 'Billetten er bekreftet. Velg hvordan dere reiser.';
    form.hidden = false; await availability();
  } catch (e) { $('#lead-status').textContent = ''; error(errorMessage(e)); }
  finally { $<HTMLButtonElement>('#lead-verify').disabled = false; }
});
$('#lead-change').addEventListener('click', () => {
  proofs.delete(1); leadRef.readOnly = false; leadRef.focus(); form.hidden = true;
  $('#lead-change').hidden = true; $<HTMLButtonElement>('#lead-verify').hidden = false;
  $('#lead-status').textContent = ''; invalidate();
});
function updatePeople() {
  const manual = choice === 'manual';
  $('#manual-options').hidden = !manual;
  $<HTMLSelectElement>('#preference').required = manual;
  $('#people-section').hidden = !choice;
  fields.forEach((field,index) => {
    const active = index < count(); field.hidden = !active; field.disabled = !active;
    const ticket = field.querySelector<HTMLElement>('[data-ticket-box]');
    const reference = field.querySelector<HTMLInputElement>('[data-reference]');
    if (ticket && reference) {
      ticket.hidden = manual;
      reference.required = active && !manual;
    }
  });
  $<HTMLButtonElement>('#booking-submit').textContent = manual ? 'Send forespørsel om romplass' : 'Bekreft rombooking';
  invalidate();
}
document.querySelectorAll<HTMLInputElement>('input[name="choice"]').forEach(input => input.addEventListener('change', () => { choice=input.value; updatePeople(); }));
$<HTMLSelectElement>('#manual-count').addEventListener('change',updatePeople);
fields.forEach((field,index) => {
  const referenceInput = field.querySelector<HTMLInputElement>('[data-reference]');
  const button = field.querySelector<HTMLButtonElement>('[data-verify]');
  const status = field.querySelector<HTMLElement>('[data-ticket-status]');
  if (!button || !referenceInput || !status) return;
  referenceInput.addEventListener('input', () => { proofs.delete(index+1); status.textContent = ''; });
  button.addEventListener('click', async () => {
    clearError();
    if (!referenceInput.reportValidity()) return;
    const reference = referenceInput.value.trim();
    button.disabled = true; status.textContent='Kontrollerer …';
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
    const value = (name: keyof PersonInput) => field.querySelector<HTMLInputElement>('[data-field="' + name + '"]')?.value ?? '';
    const person: PersonInput = {
      firstname: value('firstname'),
      lastname: value('lastname'),
      mail: value('mail'),
      phone: value('phone'),
    };
    return {...person,...proofs.get(index+1)};
  });
  if (people.some((person,index) => (choice!=='manual' || index===0) && !person.proof)) {
    error('Bekreft billetten til hver deltaker før du sender inn.'); return;
  }
  const preference = choice === 'manual' ? $<HTMLSelectElement>('#preference').value : 'contact';
  if (!isRoomPreference(preference)) return;
  const payload: BookingSubmission = {requestKey,mode:choice==='manual'?'manual':'automatic',people,
    preference,note:$<HTMLTextAreaElement>('#booking-note').value,accepted:$<HTMLInputElement>('#booking-accepted').checked};
  $<HTMLFieldSetElement>('#booking-fields').disabled=true;
  $<HTMLButtonElement>('#booking-submit').textContent='Registrerer …';
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
  } catch(e) { error(errorMessage(e)); if(e instanceof BookingApiError && e.code==='sold_out') await availability(); }
  finally { $<HTMLFieldSetElement>('#booking-fields').disabled=false; $<HTMLButtonElement>('#booking-submit').textContent=choice==='manual'?'Send forespørsel om romplass':'Bekreft rombooking'; }
});
$('#receipt-print').addEventListener('click',() => window.print());
