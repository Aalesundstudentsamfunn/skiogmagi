import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { BookingError } from './errors.mjs';
import { verifyStelloTicket } from './stello.mjs';

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const digest = value => createHash('sha256').update(value).digest();
const equal = (a, b) => timingSafeEqual(digest(a), digest(b));
const sign = (value, secret) => createHmac('sha256', secret).update(value).digest('base64url');
const text = (value, max, required = true) => {
  if (typeof value !== 'string' || value.trim().length > max || (required && !value.trim())) throw new BookingError('invalid_input');
  return value.trim();
};
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store, private', 'X-Content-Type-Options': 'nosniff' },
});

export function createBookingService(env, dependencies = {}) {
  const now = dependencies.now || Date.now;
  const verifier = dependencies.verifyTicket || verifyStelloTicket;
  const fetcher = dependencies.fetch || fetch;
  const secret = env.BOOKING_TOKEN_SECRET || '';
  const eventId = env.STELLO_EVENT_ID || '';
  const requireConfig = () => {
    if (secret.length < 32 || !eventId) throw new BookingError('booking_not_configured', 503);
  };
  const rpc = dependencies.rpc || (async (name, args = {}) => {
    if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) throw new BookingError('booking_not_configured', 503);
    const response = await fetcher(`${env.SUPABASE_URL.replace(/\/$/, '')}/rest/v1/rpc/${name}`, {
      method: 'POST', headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(args), signal: AbortSignal.timeout(10000),
    });
    const data = await response.json();
    if (!response.ok) {
      const known = ['sold_out','ticket_already_booked','idempotency_conflict','invalid_assignment','confirm_preferences','clarify_preferences','note_required','invalid_booking'];
      const code = known.find(code => data.message === code);
      throw new BookingError(code || 'storage_unavailable', code ? 409 : 503);
    }
    return data;
  });
  const checkTicket = async reference => {
    requireConfig();
    const result = await verifier(text(reference, 160), { eventId, env });
    if (!result || result.valid !== true || result.eventId !== eventId || typeof result.ticketId !== 'string' || !result.ticketId.trim() || result.ticketId.length > 160) throw new BookingError('invalid_ticket', 422);
    return result.ticketId.trim();
  };
  const mintProof = ticketId => {
    const payload = Buffer.from(JSON.stringify({ ticketId, eventId, expires: now() + 30 * 60 * 1000 })).toString('base64url');
    return `${payload}.${sign(payload, secret)}`;
  };
  const readProof = proof => {
    requireConfig();
    const [payload, signature, extra] = text(proof, 2000).split('.');
    if (!payload || !signature || extra || !equal(signature, sign(payload, secret))) throw new BookingError('verify_again', 401);
    let value;
    try { value = JSON.parse(Buffer.from(payload, 'base64url').toString()); } catch { throw new BookingError('verify_again', 401); }
    if (!Number.isFinite(value.expires) || value.expires <= now() || value.eventId !== eventId) throw new BookingError('verify_again', 401);
    return value;
  };
  async function submit(body) {
    requireConfig();
    if (!uuid.test(body.requestKey || '') || !['automatic','manual'].includes(body.mode) || body.accepted !== true) throw new BookingError('invalid_input');
    const n = body.people?.length;
    if (!Array.isArray(body.people) || !(body.mode === 'automatic' ? [3,4] : [1,2]).includes(n)) throw new BookingError('invalid_input');
    if (!['women','men','contact'].includes(body.preference)) throw new BookingError('invalid_input');
    const people = [];
    for (let i = 0; i < n; i++) {
      const source = body.people[i];
      if (!source || typeof source !== 'object' || Array.isArray(source)) throw new BookingError('invalid_input');
      const person = { firstname: text(source.firstname,100), lastname: text(source.lastname,100),
        mail: text(source.mail ?? '',254,i===0), phone: text(source.phone ?? '',32,i===0), ticketId: null };
      if (person.mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(person.mail)) throw new BookingError('invalid_input');
      if (person.phone && (!/^\+?[\d ()-]{7,32}$/.test(person.phone) || !/^\d{7,15}$/.test(person.phone.replace(/\D/g,'')))) throw new BookingError('invalid_input');
      if (body.mode === 'automatic' || i === 0) {
        const proof = readProof(source.proof);
        person.ticketId = await checkTicket(source.reference);
        if (person.ticketId !== proof.ticketId) throw new BookingError('verify_again', 401);
      }
      people.push(person);
    }
    const ids = people.map(p => p.ticketId).filter(Boolean);
    if (new Set(ids).size !== ids.length) throw new BookingError('duplicate_ticket', 409);
    const normalized = { mode:body.mode, people, preference:body.preference, note:text(body.note ?? '',2000,false) };
    const requestHash = digest(JSON.stringify(normalized)).toString('hex');
    return rpc('skiogmagi_create_booking', { p_request: { ...normalized, requestKey:body.requestKey,requestHash } });
  }
  return async function handle(request, clientAddress = 'unknown') {
    try {
      const action = new URL(request.url).pathname.split('/').filter(Boolean).at(-1);
      if (!['GET','POST'].includes(request.method)) return json({ error:'method_not_allowed' },405);
      if (request.method === 'POST') {
        const origin = request.headers.get('Origin');
        if (origin && origin !== new URL(request.url).origin) throw new BookingError('invalid_origin',403);
      }
      if (action === 'admin') {
        const token = request.headers.get('Authorization')?.replace(/^Bearer /,'') || '';
        if (!env.ROOM_ADMIN_TOKEN || env.ROOM_ADMIN_TOKEN.length < 32 || !equal(token,env.ROOM_ADMIN_TOKEN)) throw new BookingError('unauthorized',401);
        if (request.method === 'GET') return json(await rpc('skiogmagi_admin_list'));
      } else if (action === 'availability' && request.method === 'GET') {
        return json(await rpc('skiogmagi_availability'));
      } else if (!['verify','submit'].includes(action) || request.method !== 'POST') return json({error:'method_not_allowed'},405);
      if (action !== 'admin') {
        requireConfig();
        const bucket = sign(`${clientAddress}:${Math.floor(now()/900000)}`,secret);
        if (!await rpc('skiogmagi_rate_limit',{p_bucket:bucket})) throw new BookingError('rate_limited',429);
      }
      const raw = await request.text();
      if (raw.length > 20000) throw new BookingError('invalid_input',413);
      let body;
      try { body = JSON.parse(raw); } catch { throw new BookingError('invalid_input'); }
      if (!body || typeof body !== 'object' || Array.isArray(body)) throw new BookingError('invalid_input');
      if (action === 'verify') {
        const ticketId = await checkTicket(body.reference);
        return json({ proof:mintProof(ticketId), valid:true });
      }
      if (action === 'submit') return json(await submit(body));
      if (body.action === 'assign') {
        if (!Array.isArray(body.ids) || body.ids.length > 4 || !body.ids.length || body.ids.some(id => !Number.isSafeInteger(id) || id <= 0) || ![3,4].includes(body.roomType)) throw new BookingError('invalid_input');
        return json(await rpc('skiogmagi_assign_room',{p_ids:body.ids,p_room_type:body.roomType,p_note:text(body.note,2000),p_preferences_confirmed:body.preferencesConfirmed===true}));
      }
      if (body.action === 'cancel' && Number.isSafeInteger(body.id) && body.id > 0) return json(await rpc('skiogmagi_cancel_booking',{p_id:body.id,p_note:text(body.note,2000)}));
      throw new BookingError('invalid_input');
    } catch (error) {
      if (error instanceof BookingError) return json({error:error.code},error.status);
      console.error('[booking] Unexpected failure', error?.name || 'Error');
      return json({error:'service_unavailable'},503);
    }
  };
}
