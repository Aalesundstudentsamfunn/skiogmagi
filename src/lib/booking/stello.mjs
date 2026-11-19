import { BookingError } from './errors.mjs';

/**
 * TODO: Implement when the individual-ticket API is supplied.
 * Return { ticketId, eventId, valid: true } ONLY for a current, paid,
 * non-refunded, non-transferred ticket for the configured event.
 * ticketId must be the canonical INDIVIDUAL ticket ID, never the order ID.
 * Keep credentials server-side, add a timeout, and handle upstream outages.
 * No Tikkio fallback and no mock tickets in production.
 */
export async function verifyStelloTicket(reference, { eventId, env }) {
  throw new BookingError('stello_not_configured', 503);
}
