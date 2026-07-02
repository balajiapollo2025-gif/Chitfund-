// Sri Chit Funds — Service Worker
// Caches the app shell so it loads and works with zero network connection,
// and lets Chrome/Android offer "Add to Home Screen" / "Install App".
//
// IMPORTANT: bump CACHE_NAME (e.g. v3, v4...) every time you publish an
// update, otherwise returning users keep seeing the old cached version.

const CACHE_NAME = 'chit-funds-cache-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-72.png',
  './icon-96.png',
  './icon-128.png',
  './icon-144.png',
  './icon-152.png',
  './icon-192.png',
  './icon-384.png',
  './icon-512.png'
  // Note: version.json is deliberately NOT precached — it is always
  // fetched fresh from the network so update checks are reliable.
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // version.json: always go to the network first (cache-bust), so the
  // in-app "Check for Updates" button reflects the real latest version.
  if (event.request.url.includes('version.json')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
    );
    return;
  }

  // Everything else: cache-first, so the app works fully offline.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
