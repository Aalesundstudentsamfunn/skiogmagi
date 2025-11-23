/* eslint-env browser */

export type TicketStatus = "ACTIVE" | "USED" | "UNKNOWN";

export interface Ticket {
  id: string;
  product: string;
  ownerName: string;
  email: string;
  phone?: string;
  originalOwner?: string | null;
  status: TicketStatus;
}

// Must match src/pages/api/tickets/[ref].ts
const API_ROUTE = "/api/tickets";

export async function fetchTicketByRefId(refIdRaw: string): Promise<Ticket> {
  const refId = refIdRaw.trim().toUpperCase();
  if (!refId) {
    const err: any = new Error("EMPTY_ID");
    err.code = 400;
    throw err;
  }

  const res = await fetch(`${API_ROUTE}/${encodeURIComponent(refId)}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    const err: any = new Error("NOT_FOUND");
    err.code = 404;
    throw err;
  }

  if (!res.ok) {
    const err: any = new Error("API_ERROR");
    err.code = res.status;
    throw err;
  }

  const ticket = (await res.json()) as Ticket;

  if (!["ACTIVE", "USED", "UNKNOWN"].includes(ticket.status)) {
    ticket.status = "UNKNOWN";
  }

  return ticket;
}
