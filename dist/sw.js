self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  clients.claim();
});

// Optional no-op fetch handler (keeps Chrome happy)
self.addEventListener("fetch", () => {});
