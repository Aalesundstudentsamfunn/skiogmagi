import { getStore } from "@netlify/blobs";

const DEFAULT_LIMITS = {
  2: 88,
  3: 14,
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

const applyCountUpdates = (counts, limits, updates = {}) => {
  const next = { ...counts };
  Object.keys(limits).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(updates, key)) return;
    const value = Number(updates[key]);
    if (!Number.isFinite(value)) return;
    const clamped = Math.max(0, Math.min(limits[key], Math.floor(value)));
    next[key] = clamped;
  });
  return next;
};

const applyLimitUpdates = (limits, updates = {}) => {
  const next = { ...limits };
  Object.keys(limits).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(updates, key)) return;
    const value = Number(updates[key]);
    if (!Number.isFinite(value)) return;
    next[key] = Math.max(0, Math.floor(value));
  });
  return next;
};

export default async (req) => {
  if (req.method !== "POST") {
    return jsonResponse({ error: "method_not_allowed" }, 405);
  }

  let body = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const tokenFromHeader = req.headers.get("authorization")?.replace("Bearer ", "") || req.headers.get("x-admin-token");
  const token = body.token || tokenFromHeader || "";
  if (!token || token !== process.env.ROOM_ADMIN_TOKEN) {
    return jsonResponse({ error: "unauthorized" }, 401);
  }

  const action = body.action || "get";
  if (action === "validate") {
    return jsonResponse({ ok: true });
  }

  const { store, state } = await loadState();

  if (action === "get") {
    return jsonResponse({ counts: state.counts, limits: state.limits, pendingSolo: state.pendingSolo });
  }

  if (action !== "update") {
    return jsonResponse({ error: "invalid_action" }, 400);
  }

  const nextLimits = applyLimitUpdates(state.limits, body.limits || {});
  const nextCounts = applyCountUpdates(state.counts, nextLimits, body.counts || {});
  let pendingSolo = Number.isFinite(Number(body.pendingSolo)) ? Number(body.pendingSolo) : state.pendingSolo;
  pendingSolo = pendingSolo >= 1 ? 1 : 0;

  const nextState = { counts: nextCounts, limits: nextLimits, pendingSolo };
  await store.set("room-counts", JSON.stringify(nextState));
  return jsonResponse({ ok: true, counts: nextCounts, limits: nextLimits, pendingSolo });
};
