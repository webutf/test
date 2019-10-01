
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./mods/sw.js').then(res => {
		console.log(res)
	}).catch(error => {

	})
}

