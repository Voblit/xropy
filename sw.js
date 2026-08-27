import { ScramjetFetchHandler, defaultConfig } from 'https://cdn.jsdelivr.net/npm/@petezah-games/scramjet@2.0.3-petezah-alpha/+esm';

const handler = new ScramjetFetchHandler(defaultConfig);

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (handler.route(event)) {
    event.respondWith(handler.fetch(event));
  }
});
