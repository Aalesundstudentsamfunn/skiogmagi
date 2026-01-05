import { getStore } from "@netlify/blobs";

const DEFAULT_LIMITS = {
  2: 86,
  3: 15,
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
  Object.keys(limits).forEach((key) => {
    if (!Number.isFinite(counts[key])) counts[key] = limits[key];
    if (counts[key] > limits[key]) counts[key] = limits[key];
    if (counts[key] < 0) counts[key] = 0;
  });
  return { counts, limits };
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
    return jsonResponse({ counts: state.counts, limits: state.limits });
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

  if (!roomType || !Object.prototype.hasOwnProperty.call(DEFAULT_LIMITS, roomType)) {
    return jsonResponse({ error: "invalid_room_type" }, 400);
  }

  const { store, state } = await loadState();
  const counts = { ...state.counts };

  if (action === "reserve") {
    if (counts[roomType] <= 0) {
      return jsonResponse({ error: "sold_out", counts }, 409);
    }
    counts[roomType] = Math.max(0, counts[roomType] - 1);
  } else if (action === "release") {
    const limit = state.limits[roomType];
    counts[roomType] = Math.min(limit, counts[roomType] + 1);
  } else {
    return jsonResponse({ error: "invalid_action" }, 400);
  }

  const nextState = { counts, limits: state.limits };
  await store.set("room-counts", JSON.stringify(nextState));
  return jsonResponse({ ok: true, counts });
};
