console.log('scope')

console.log(userName)

var userName = 'Pippo'
var age = 10
let useText = 'Ciao sono Mimmo'

if (age > 5) {
	var text = 'Ciao'

	const message = 'age è maggione di 5'
	console.log(useText)
	console.log(message)

	if (age > 8) {
		console.log(message)
		let useText = 'Eccomi qui'
		console.log(useText)
	}

	console.log(useText)
}

console.log(text)
// console.log(message) // Errore: Message is not defined
