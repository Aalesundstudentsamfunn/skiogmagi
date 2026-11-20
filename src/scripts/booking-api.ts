import type { AdminAction, AdminBooking, Availability, BookingReceipt, BookingSubmission, TicketProof } from '../lib/booking/types.ts';

const messages: Record<string, string> = {
  stello_not_configured:'Billettkontrollen hos Stello er ikke klar ennå. Rombooking åpner når den er koblet til.',
  booking_not_configured:'Rombooking er ikke åpnet ennå. Prøv igjen senere.',
  invalid_ticket:'Billetten er ikke gyldig for dette arrangementet. Sjekk at du bruker din individuelle Stello billett-ID.',
  verify_again:'Billettbekreftelsen er utløpt eller endret. Bekreft billetten på nytt.',
  duplicate_ticket:'Samme billett kan ikke brukes for flere deltakere.',
  ticket_already_booked:'En av billettene er allerede registrert i en booking eller forespørsel. Kontakt arrangøren hvis dette ikke stemmer.',
  sold_out:'Denne romtypen ble akkurat fullbooket. Velg en annen romtype, eller send en manuell forespørsel.',
  idempotency_conflict:'Innholdet ble endret etter innsending. Last siden på nytt og kontakt arrangøren hvis du er usikker på om bookingen ble lagret.',
  rate_limited:'Du har gjort mange forsøk. Vent inntil 15 minutter før du prøver igjen.',
  invalid_input:'Sjekk at alle påkrevde felt er fylt ut riktig.',
  unauthorized:'Tilgangen ble avvist. Kontroller administrasjonsnøkkelen.',
  invalid_assignment:'Velg ventende forespørsler som til sammen fyller nøyaktig 3 eller 4 sengeplasser.',
  confirm_preferences:'Bekreft at billetter og romønsker er avklart, og skriv et saksnotat.',
  clarify_preferences:'Ulike eller uavklarte romønsker krever personlig avklaring og et tydelig saksnotat (minst 15 tegn).',
  note_required:'Skriv en begrunnelse på minst 5 tegn.',
};
export class BookingApiError extends Error {
  readonly code: string;

  constructor(code: string) {
    super(code);
    this.code = code;
  }
}

export const errorMessage = (error: unknown) =>
  (error instanceof BookingApiError && messages[error.code])
  || 'Kunne ikke fullføre forespørselen. Prøv igjen med de samme opplysningene. Ta kontakt hvis problemet fortsetter.';

export function api(action: 'status'): Promise<{ testMode: boolean }>;
export function api(action: 'availability'): Promise<Availability[]>;
export function api(action: 'verify', body: { reference: string }): Promise<TicketProof>;
export function api(action: 'submit', body: BookingSubmission): Promise<BookingReceipt>;
export function api(action: 'admin', body: undefined, token: string): Promise<AdminBooking[]>;
export function api(action: 'admin', body: AdminAction, token: string): Promise<unknown>;
export function api(action: 'reset', body: Record<string, never>, token: string): Promise<unknown>;
export async function api(action: string, body?: unknown, token?: string): Promise<unknown> {
  const response = await fetch('/api/booking/' + action, {
    method: body === undefined ? 'GET' : 'POST',
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    signal: AbortSignal.timeout(60000),
  });
  const data: unknown = await response.json();
  if (!response.ok) {
    const code = data && typeof data === 'object' && 'error' in data ? data.error : undefined;
    throw new BookingApiError(typeof code === 'string' ? code : 'service_unavailable');
  }
  return data;
}
