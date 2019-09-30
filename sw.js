importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
console.log(456465)
self.addEventListener('fetch', function(e) {
	console.log(fetch)
})

self.addEventListener('install', function(e) {
	console.log('install')
})

if (workbox) {
	console.log(456465465797)
}

workbox.routing.registerRoute(
	/\.min\.js$/,
	new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
	/\.css$/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'css-cache',
	})
);

workbox.routing.registerRoute(
	/\.(?:png|jpg|jpeg|svg|gif)$/,
	// Use the cache if it's available.
	new workbox.strategies.CacheFirst({
		cacheName: 'image-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 20,
				maxAgeSeconds: 7 * 24 * 60 * 60,
			})
		],
	})
);