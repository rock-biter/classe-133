console.log('dadi')

/**
 * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

// generare un numero da 1 a 6
const numUser = Math.floor(Math.random() * 6) + 1 // Number [1-6]
// generare un numero da 1 a 6
const numPC = Math.floor(Math.random() * 6) + 1 // Number [1-6]
console.log(numPC, numUser)

let message = 'Pareggio'

if (numPC > numUser) {
	message = 'Hai perso'
} else if (numUser > numPC) {
	message = 'Hai vinto'
}

console.log(message)
