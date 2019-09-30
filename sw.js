console.log(456465)
self.addEventListener('fetch', function(e) {
	console.log(fetch)
})

self.addEventListener('install', function(e) {
	console.log('install')
})