// Netlify's static header rules do not apply to server-rendered responses or functions.
// Keep this baseline in sync with the catch-all header rule in netlify.toml.
// Script and resource allowlists require a separate review of inline code and media.
export const SECURITY_HEADERS = Object.freeze({
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": "base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests",
});
