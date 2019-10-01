
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./mods/sw.js', {scope: '/'}).then(res => {
		console.log(res)
	}).catch(error => {

	})
}

