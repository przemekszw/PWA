const staticDevCoffee = "dev-site-v1"
const assets = [
  'index.html',
  'manifest.json',
  'icon.png'
];
/* Start the service worker and cache all of the app's content */
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

/* Serve cached content when offline */
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
