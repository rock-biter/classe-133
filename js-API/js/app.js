console.log('API')

// fetch('https://flynn.boolean.careers/exercises/api/random/boolean')
// 	.then((response) => {
// 		console.log('risposta arrivata')

// 		return response.json()
// 	})
// 	.then((data) => {
// 		// qui invece abbiamo tutti i dati della risposta
// 		console.log('data', data)
// 	})
// 	.catch(() => {
// 		console.log('errore')
// 	})

// // qui non abbiamo ancora i dati della richiesta http
// console.log('ciao mondo')

// console.log(axios)

function gioca() {
	axios
		.get(
			'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=6&items=2'
		)
		.then((res) => {
			// console.log('qui è arrivata la risposta', res.data)
			console.log(res)
			console.log(res.data)

			const numeri = res.data.response
			console.log(numeri)
			const [numU, numPC] = numeri

			if (numU > numPC) {
				alert('hai vinto')
			} else if (numPC > numU) {
				alert('hai perso')
			} else {
				alert('Pareggio')
			}
			// qui abbiamo accesso ai dati della response
		})
		.catch((err) => {
			console.log('qui ci finiamo se qualcosa è andato storto', err)
			// qui abbiamo accesso all'errore che ha generato la chiamata
		})
}

// qui non abbiamo la risposta
console.log('ciao')
gioca()
// window.addEventListener('click', gioca)
