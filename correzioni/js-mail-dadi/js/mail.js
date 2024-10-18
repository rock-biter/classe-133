console.log('mail')

/**
 * Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */

const mails = [
	'ciao@gmail.com',
	'mamma@gmail.com',
	'mimmo@gmail.com',
	'hello@gmail.com',
	'babbo@gmail.com',
	'gigi@gmail.com',
	'mirko@gmail.com',
	'sara@gmail.com',
	'miriam@gmail.com',
	'hi@gmail.com',
	'luisa@gmail.com',
	'caio@gmail.com',
]

// chiedere la mail dell'utente
const userEmail = prompt('Inserisci la tua email') // string

// controlliamo se la userEmail è presente nell'array
let found = false // boolean

for (let i = 0; i < mails.length; i++) {
	// console.log(i)
	const currentMail = mails[i]
	console.log(currentMail, i)
	// console.log(currentMail === userEmail)

	if (currentMail !== userEmail) {
		continue
	}

	console.log('found = true')
	found = true
	break

	// if (currentMail === userEmail) {
	// 	found = true
	// 	break
	// }
}

console.log(found)
// SE la mail è stata trovata
//  - stampa hai accesso alla pagina
// ALTRIMENTI
//  - accesso negato
if (found) {
	console.log('Hai accesso alla pagina')
} else {
	console.log('accesso negato')
}

//

// if (mails.includes(userEmail)) {
// 	console.log('accesso consentito')
// } else {
// 	console.log('accesso negato')
// }
