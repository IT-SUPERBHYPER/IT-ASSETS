const CACHE_NAME = 'superb-assets-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/NEW LOGO.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
