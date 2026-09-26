const CACHE='remindr-v1';
const ASSETS=['./','./index.html','./manifest.json','./fonts/SF-Pro-Display-Regular.ttf','./fonts/SF-Pro-Display-Bold.ttf','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return res}).catch(()=>caches.match('./index.html')))));
