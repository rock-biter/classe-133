console.log('calcolo biglietto')

/**
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */

/**
 * - chiedere all'utente il numero di km del viaggio
 * - chiedere all'utente la sua eta
 * - calcolare prezzo biglietto:
 *    - calcolare il prezzo base: km * 0.21
 *    - calcolare lo sconto:
 *        - SE eta < 18
 *            - percentuale sconto = 20
 *        - ALTRIMENTI SE eta > 65
 *            - percentuale sconto = 40
 *        - ALTRIMENTI
 *            - percentuale sconto = 0
 *        - sconto = prezzo base * percentuale sconto / 100
 *    - calcolare il prezzo finale: prezzo base - sconto
 * - stampare il prezzo del biblietto
 */

// - chiedere all'utente il numero di km del viaggio
const km = parseFloat(prompt('Quanti chilometri devi percorrere?')) // number
// - chiedere all'utente la sua eta
const age = parseInt(prompt('Quanti anni hai?')) // number

console.log(km, age)

// - calcolare prezzo biglietto:
const basePrice = km * 0.21
console.log('prezzo base', basePrice)

let discountPercentage

if (age < 18) {
	discountPercentage = 20
} else if (age > 65) {
	discountPercentage = 40
} else {
	discountPercentage = 0
}

console.log('Percentuale sconto: ', discountPercentage)
const discount = (basePrice * discountPercentage) / 100
console.log('sconto: ', discount)

const price = basePrice - discount

// - stampare il prezzo del biblietto
const formattedPrice = new Intl.NumberFormat('it-IT', {
	style: 'currency',
	currency: 'EUR',
}).format(price)

const humanPrice = price.toFixed(2)

console.log('prezzo: ', humanPrice + ' €', formattedPrice)
