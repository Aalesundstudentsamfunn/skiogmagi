import { defineMiddleware } from "astro:middleware";
import { SECURITY_HEADERS } from "./utils/security-headers.js";

export const onRequest = defineMiddleware(async ({ url }, next) => {
  const response = await next();
  // Clone the response headers so redirects and other immutable responses are safe.
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    // Safari also upgrades localhost navigation when this directive is present.
    // The development server uses HTTP; production retains the HTTPS policy.
    const localValue = import.meta.env.DEV && name === "Content-Security-Policy"
      ? value.replace(/;\s*upgrade-insecure-requests\b/g, "")
      : value;
    headers.set(name, localValue);
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
