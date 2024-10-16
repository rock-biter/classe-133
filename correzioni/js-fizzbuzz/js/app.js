// console.log('fizzbuzz')

/**
 * Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 */

/**
 * - stampare 100 volte un numero partendo da 1 fino a 100
 *    - SE il numero è multiplo di 3 e anche di 5
 *        - stampa FIZZBUZZ
 *    - ALTRIMENTI SE il numero è multiplo di 5
 *        - stampa BUZZ
 *    - ALTRIMENTI SE il numero è multiplo di 3
 *        - stampa FIZZ
 *    - ALTRIMENTI
 *        - stampa numero
 */

for (let i = 0; i < 100; i++) {
	// console.log(i)

	const num = i + 1 // number

	let message = '' + num // string

	const mul3 = num % 3 === 0 // boolean
	const mul5 = num % 5 === 0 // boolean

	if (mul3 && mul5) {
		message = 'FIZZBUZZ'
	} else if (mul5) {
		message = 'BUZZ'
	} else if (mul3) {
		message = 'FIZZ'
	}
	// else {
	// 	message = '' + num
	// }

	console.log(message)

	// template literal
	// document.body.innerHTML += `<p>${message}</p>`
}
