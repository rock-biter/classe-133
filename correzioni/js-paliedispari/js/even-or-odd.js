console.log('Pari e dispari')

/**
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */

// chiediamo all'utente di inserire 'pari' o 'dispari'
const sceltaUtente = prompt('Scrivi pari o dispari')
// chiediamo un numero da 1 a 5
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'))
console.log('scelta: ', sceltaUtente)
console.log('numero utente: ', numeroUtente)

// generare un numero da 1 a 5 per il pc
const numeroPC = getRandomIntInclusive(1, 5)
// facciamo la somma dei due numeri
console.log('numero pc:', numeroPC)

const somma = numeroPC + numeroUtente
console.log('somma:', somma)

// - utente vince SE pari e somma pari
// - utente vince SE dispari e somma è dispari
// - altrimenti utente perde

// verificare chi ha vinto
let message = 'Hai perso!'

if (userWins(somma, sceltaUtente)) {
	message = 'Hai vinto'
}
// if (isEven(somma) && sceltaUtente.toLowerCase() === 'pari') {
// 	message = 'Hai vinto'
// } else if (!isEven(somma) && sceltaUtente.toLowerCase() === 'dispari') {
// 	message = 'Hai vinto'
// }

// const sommaPariEUtentePari =
// 	isEven(somma) && sceltaUtente.toLowerCase() === 'pari'

// const sommaDispariEUtenteDispari =
// 	!isEven(somma) && sceltaUtente.toLowerCase() === 'dispari'

// if (sommaPariEUtentePari || sommaDispariEUtenteDispari) {
// 	message = 'Hai vinto'
// }

// stampa messaggio vittoria
console.log(message)

function userWins(somma, sceltaUtente) {
	// user wins when sum is even
	if (isEven(somma) && sceltaUtente.toLowerCase() === 'pari') {
		return true
	}

	// user wins whne sum is odd
	if (!isEven(somma) && sceltaUtente.toLowerCase() === 'dispari') {
		return true
	}

	// user loose
	return false
}

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

function isEven(num) {
	return num % 2 === 0
	// const resto = num % 2

	// if(resto === 0) {
	//   return true
	// }

	// return false
}
