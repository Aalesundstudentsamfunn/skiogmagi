import { getStore } from "@netlify/blobs";

const DEFAULT_LIMITS = {
  2: 88,
  3: 16,
  4: 21,
};

const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

const normalizeState = (state) => {
  const limits = { ...DEFAULT_LIMITS, ...(state?.limits || {}) };
  const counts = { ...limits, ...(state?.counts || {}) };
  let pendingSolo = Number(state?.pendingSolo || 0);
  if (!Number.isFinite(pendingSolo) || pendingSolo < 0) pendingSolo = 0;
  pendingSolo = pendingSolo >= 1 ? 1 : 0;
  Object.keys(limits).forEach((key) => {
    if (!Number.isFinite(counts[key])) counts[key] = limits[key];
    if (counts[key] > limits[key]) counts[key] = limits[key];
    if (counts[key] < 0) counts[key] = 0;
  });
  return { counts, limits, pendingSolo };
};

const loadState = async () => {
  const store = getStore("room-booking");
  let stored = null;
  let raw = null;

  try {
    raw = await store.get("room-counts", { type: "text" });
    if (raw) stored = JSON.parse(raw);
  } catch {
    stored = null;
  }

  const state = normalizeState(stored || {});
  const nextRaw = JSON.stringify(state);
  if (!raw || raw !== nextRaw) {
    await store.set("room-counts", nextRaw);
  }

  return { store, state };
};

export default async (req) => {
  if (req.method === "GET") {
    const { state } = await loadState();
    return jsonResponse({ counts: state.counts, limits: state.limits, pendingSolo: state.pendingSolo });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "method_not_allowed" }, 405);
  }

  let body = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const action = body.action || "reserve";
  const roomType = String(body.roomType || "");
  const isSolo = Boolean(body.solo);

  if (!roomType || !Object.prototype.hasOwnProperty.call(DEFAULT_LIMITS, roomType)) {
    return jsonResponse({ error: "invalid_room_type" }, 400);
  }

  const { store, state } = await loadState();
  const counts = { ...state.counts };
  let pendingSolo = state.pendingSolo || 0;

  if (action === "reserve") {
    if (roomType === "2" && isSolo) {
      // Solo bookings pair two people into one 2-person room via pendingSolo.
      if (pendingSolo === 1) {
        pendingSolo = 0;
      } else {
        if (counts[roomType] <= 0) {
          return jsonResponse({ error: "sold_out", counts, pendingSolo }, 409);
        }
        counts[roomType] = Math.max(0, counts[roomType] - 1);
        pendingSolo = 1;
      }
    } else {
      if (counts[roomType] <= 0) {
        return jsonResponse({ error: "sold_out", counts, pendingSolo }, 409);
      }
      counts[roomType] = Math.max(0, counts[roomType] - 1);
    }
  } else if (action === "release") {
    const limit = state.limits[roomType];
    if (roomType === "2" && isSolo) {
      // Undo solo pairing or free the reserved room slot.
      if (pendingSolo === 1) {
        counts[roomType] = Math.min(limit, counts[roomType] + 1);
        pendingSolo = 0;
      } else {
        pendingSolo = 1;
      }
    } else {
      counts[roomType] = Math.min(limit, counts[roomType] + 1);
    }
  } else {
    return jsonResponse({ error: "invalid_action" }, 400);
  }

  const nextState = { counts, limits: state.limits, pendingSolo };
  await store.set("room-counts", JSON.stringify(nextState));
  return jsonResponse({ ok: true, counts, pendingSolo });
};
