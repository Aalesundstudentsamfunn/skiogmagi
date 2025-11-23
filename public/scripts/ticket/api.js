/* eslint-env browser */

// Matches your API endpoint
const API_ROUTE = "/api/tickets";

/**
 * Fetch a ticket by its reference ID (refId)
 * Returns a normalized ticket object or throws with .code = 404 / 400 / status
 */
export async function fetchTicketByRefId(refIdRaw) {
  const refId = String(refIdRaw || "")
    .trim()
    .toUpperCase();

  if (!refId) {
    const err = new Error("EMPTY_ID");
    err.code = 400;
    throw err;
  }

  const res = await fetch(`${API_ROUTE}/${encodeURIComponent(refId)}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    const err = new Error("NOT_FOUND");
    err.code = 404;
    throw err;
  }

  if (!res.ok) {
    const err = new Error("API_ERROR");
    err.code = res.status;
    throw err;
  }

  const ticket = await res.json();

  // Normalize status just in case
  const status = String(ticket.status || "").toUpperCase();
  if (!["ACTIVE", "USED", "UNKNOWN"].includes(status)) {
    ticket.status = "UNKNOWN";
  } else {
    ticket.status = status;
  }

  return ticket;
}
