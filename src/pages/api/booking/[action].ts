import type { APIRoute } from 'astro';
import { createBookingService } from '../../../lib/booking/service.ts';
import { resolve } from 'node:path';
export const prerender = false;
export const ALL: APIRoute = async ({ request, clientAddress }) => {
  const env = { ...import.meta.env, ...process.env };
  const hostname = new URL(request.url).hostname;
  const settings = { isDev: import.meta.env.DEV, env, hostname, clientAddress };
  const local = import.meta.env.DEV && env.BOOKING_TEST_MODE === 'true'
    ? await import('../../../lib/booking/local-test.ts')
    : undefined;
  const testMode = local?.isLocalTestAllowed(settings) ?? false;
  const action = new URL(request.url).pathname.split('/').filter(Boolean).at(-1);
  if (action === 'status' && request.method === 'GET') {
    return new Response(JSON.stringify({ testMode }), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  }
  if (local && testMode) {
    return local.createLocalTestHandler({ ...settings, filename: resolve('.booking-test/state.json') })(request);
  }
  return createBookingService(env)(request, clientAddress);
};
