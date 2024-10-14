console.log('pari e dispari')

// chiedere all'utente un numero da 1 a 10
const numeroUtente = parseInt(prompt('Inserire un numero da 1 a 10')) // number
console.log(numeroUtente)
// generare un numero random da 1 a 10
const numeroPC = Math.floor(Math.random() * 10) + 1 // number
// console.log(Math.floor(Math.random() * 10) + 1) // 1-10
console.log(numeroPC)
// fare la somma dei due numeri
const somma = numeroPC + numeroUtente // number
console.log(somma)
// verificare se la somma è pari
// un numero è pari quando è divisibile per 2 e non da resto

// 5 / 2 => resto uguale 1 => 5 non è pari
// 6 / 2 => resto uguale a 0 => 6 è pari
// console.log(5 / 2)
const resto = somma % 2 // operatore modulo = 1
console.log(`resto della divisione ${somma}/2: `, resto)

// SE la somma è pari
//    -> stampiamo la somma è pari
// ALTRIMENTI
//    -> stampiamo la somma è dispari
let message = ''
if (resto === 0) {
	message = `La somma di ${numeroUtente} e ${numeroPC} è pari`
} else {
	message = `La somma di ${numeroUtente} e ${numeroPC} è dispari`
}

console.log(message)

// Calcolare la potenza di un numero
// const pow2 = Math.pow(10, 2)
const pow2 = 10 ** 2 // ** operatore potenza
console.log(pow2)

// prezzo base
// sconto : 0 | 20 | 40

// esempio calcolo sconto con 20%
// prezzo base * 20 / 100

// prezzo finale: prezzo base - sconto
