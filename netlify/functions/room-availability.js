import { SECURITY_HEADERS } from "../../src/utils/security-headers.js";

// Old browser tabs must refresh; retire unauthenticated reserve/release and solo pairing.
export default async () => new Response(JSON.stringify({ error: 'booking_flow_updated', message: 'Last inn bookingsiden på nytt.' }), {
  status: 410, headers: { ...SECURITY_HEADERS, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
});
