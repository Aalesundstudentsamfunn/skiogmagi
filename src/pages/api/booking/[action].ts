import type { APIRoute } from 'astro';
import { createBookingService } from '../../../lib/booking/service.mjs';
import { resolve } from 'node:path';
import { isLocalTestAllowed } from '../../../lib/booking/local-test.mjs';
export const prerender = false;
export const ALL: APIRoute = async ({ request, clientAddress }) => {
  const env = { ...import.meta.env, ...process.env };
  const hostname = new URL(request.url).hostname;
  const settings = { isDev: import.meta.env.DEV, env, hostname, clientAddress };
  const testMode = isLocalTestAllowed(settings);
  const action = new URL(request.url).pathname.split('/').filter(Boolean).at(-1);
  if (action === 'status' && request.method === 'GET') {
    return new Response(JSON.stringify({ testMode }), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  }
  if (testMode) {
    const { createLocalTestHandler } = await import('../../../lib/booking/local-test.mjs');
    return createLocalTestHandler({ ...settings, filename: resolve('.booking-test/state.json') })(request);
  }
  return createBookingService(env)(request, clientAddress);
};
