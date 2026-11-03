const CACHE='my-travel-map-v8';
const CORE=['./','./index.html','./manifest.webmanifest','./icon.svg','./data/countries.json','./data/countries.geojson','./data/us-states.geojson'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('my-travel-map-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
 e.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  try{const response=await fetch(e.request);if(response.ok)await cache.put(e.request,response.clone());return response}
  catch(error){const cached=await cache.match(e.request);if(cached)return cached;throw error}
 })());
});
