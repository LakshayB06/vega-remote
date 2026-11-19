// VEGA Remote service worker: only makes the app installable. It caches nothing and touches no phone data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { });
