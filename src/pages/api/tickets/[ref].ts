import type { APIRoute } from "astro";

export const prerender = false;

// Environment variables (server-side only)
const BASE = import.meta.env.ATTENDEE_API_BASE;
const EVENT_ID = import.meta.env.ATTENDEE_API_EVENT_ID;
const API_TOKEN = import.meta.env.ATTENDEE_API_TOKEN || "";

if (!BASE || !EVENT_ID) {
  console.error("[tickets API] Missing ATTENDEE_API_BASE or ATTENDEE_API_EVENT_ID");
}

const ATTENDEE_API_URL = `${String(BASE).replace(/\/$/, "")}/${EVENT_ID}/attendees`;

interface Attendee {
  ref_id?: string;
  name?: string;
  email?: string;
  phone?: string | null;
  scanned_at?: string | null;
  ticket?: { name?: string };
  user?: { name?: string; email?: string; phone?: string | null };
}

interface AttendeeResponse {
  data?: Attendee[];
  meta?: {
    last_page?: number | number[];
    has_more_pages?: boolean;
  };
}

const normalizeNumber = (value?: number | number[] | null): number | null => {
  if (Array.isArray(value)) return Number(value[0]);
  if (typeof value === "number") return value;
  return null;
};

async function fetchPage(page: number): Promise<AttendeeResponse> {
  if (!ATTENDEE_API_URL) throw new Error("Missing ATTENDEE_API_URL");

  const url = new URL(ATTENDEE_API_URL);
  url.searchParams.set("page", String(page));

  const headers: Record<string, string> = { Accept: "application/json" };
  if (API_TOKEN) headers.Authorization = `Bearer ${API_TOKEN}`;

  const res = await fetch(url.toString(), { headers, cache: "no-store" });

  // Helpful logging during debugging:
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error(`[tickets API] Tikkio error ${res.status}: ${res.statusText}`, body || "(no body)");
    throw new Error(`Tikkio returned ${res.status}`);
  }

  return res.json();
}

async function findAttendeeByRef(refId: string): Promise<Attendee | null> {
  const lookup = refId.trim().toUpperCase();
  if (!lookup) return null;

  let page = 1;
  let lastPage: number | null = null;
  let hasMore = true;

  while (hasMore && (lastPage === null || page <= lastPage)) {
    const json = await fetchPage(page);
    const items = json.data ?? [];

    const match = items.find((att) => String(att.ref_id || "").toUpperCase() === lookup);
    if (match) return match;

    const meta = json.meta || {};
    const normalized = normalizeNumber(meta.last_page);
    if (normalized !== null) lastPage = normalized;

    hasMore = Boolean(meta.has_more_pages ?? (normalized === null || page < normalized));
    page++;
  }

  return null;
}

function mapToTicket(attendee: Attendee) {
  const status = attendee.scanned_at ? "USED" : "ACTIVE";

  return {
    id: attendee.ref_id || "",
    product: attendee.ticket?.name || attendee.name || "Billett",
    ownerName: attendee.user?.name || attendee.name || "",
    email: attendee.user?.email || attendee.email || "",
    phone: attendee.user?.phone || attendee.phone || "",
    originalOwner: null,
    status,
  };
}

export const GET: APIRoute = async ({ params }) => {
  const ref = (params.ref || "").toUpperCase();

  if (!ref) {
    return new Response(JSON.stringify({ message: "Missing ticket reference" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const attendee = await findAttendeeByRef(ref);

    if (!attendee) {
      return new Response(JSON.stringify({ message: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(mapToTicket(attendee)), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    console.error("Ticket API error:", err);
    return new Response(JSON.stringify({ message: err?.message || "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
