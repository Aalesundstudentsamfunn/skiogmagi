import { defineMiddleware } from "astro:middleware";
import { SECURITY_HEADERS } from "./utils/security-headers.js";

export const onRequest = defineMiddleware(async ({ url }, next) => {
  const response = await next();
  // Clone the response headers so redirects and other immutable responses are safe.
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }
  // Ticket details and API errors must never be stored in shared or browser caches.
  if (url.pathname.startsWith("/api/")) {
    headers.set("Cache-Control", "no-store");
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});
