// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log("SW startup");

var CACHE_NAME = "my_cache";
var urlsToCache = [
  '/css/style.css',
  '/js/script.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        console.log(event.request.url);
        if (response) {
          console.log("cache hit");
          return response;
        }
        console.log("cache miss");
        return fetch(event.request.clone());
      }
    )
  );
});
