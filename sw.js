// Service Worker Minimal
self.addEventListener('install', (e) => {
    console.log('PWA Service Worker activ.');
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});
