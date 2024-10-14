console.log('hello')

// Eta dell'utente
const age = 8

// SE è maggiorenne (age >= 18)
//    scriviamo "Sei maggiorenne"
// ALTRIMENTI
//    scriviamo "Sei minorenne"
if (age >= 18) {
	console.log('Sei maggiorenne')
} else {
	console.log('Sei minorenne')
}

// SE è minorenne (age < 18)
//    scriviamo "Sei minorenne"
// ALTRIMENTI
//    scriviamo "Sei maggiorenne"
if (age < 18) {
	console.log('Sei minorenne')
} else {
	console.log('Sei maggiorenne')
}

// SE ha meno di 21 anni
//    hai meno di 21 anni
// ALTRIMENTI SE ha meno di 10 anni
//    hai più di 21 anni
// ALTRIMENTI
//    hai 21 anni
if (age < 21 && age >= 10) {
	console.log('hai meno di 21')
} else if (age < 10) {
	console.log('hai meno di 10 anni')
} else {
	console.log('hai 21 anni')
}
