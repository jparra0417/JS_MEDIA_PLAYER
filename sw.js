
const VERSION ='v1';
// self is equals a this in service worker
// let's install the urls to be cached
self.addEventListener('install', event => {
    // create the pre cache
    event.waitUntil(precache)
});

// let's add service worker for the fetch
self.addEventListener('fetch', event => {
    const request = event.request;    
    if(request.method !== 'GET'){
        return;
    }
    event.respondWith(cachedResponse(request));
    // actualizar cache
    event.waitUntil(updateCache(request));
})

// it manages the cache
async function precache() {
    // it returns a cache isntance    
    const cache = await caches.open(VERSION);
    // add all requests
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/js/MediaPlayer.js',
        '/assets/js/plugins/AutoPlay.js',
        '/assets/js/plugins/AutoPause.js',        
    ]);
}

// it returns the cached response given a request
async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request); // if exists then return response otherwise fetch the request
}

// it updates the cache given a request
async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    // Cache.put when status code is 200 
    // Otherwise return a simple promise 
    return response.status === 200 
        ? cache.put(request, response) 
        : new Promise((resolve, reject) => resolve(':D'));    
}