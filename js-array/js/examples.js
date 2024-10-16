console.log('array for examples')

// 1) a partire da un array di numeri stampare tutti i numeri

// const numeri = [2, 6, 5, 9, 4, 8, 6, 2, 3]
// console.log(numeri)

// Numeri
// 0, NaN => false
// 1, 13, -56, ... => true

// Stringhe
// 'ciao', 'si', 'false', 'vero' => true
// '' => false

// null => false
// undefined => false

// if (numeri.length) {
// 	console.log('ciao')
// }
// 2.1)
// for (let i = 0; i < numeri.length; i++) {
// 	// console.log(i)
// 	const currentElement = numeri[i] // numeri.at(i)
// 	console.log(`${i}:`, currentElement)

// 	//stampa la potenza del 2 del numero corrente
// }

// 2.2) stampare tutti i numeri ma partendo dalla fine

// for (let i = 0; i < numeri.length; i++) {
// 	const negativeIndex = -i - 1 //
// 	const currentElement = numeri.at(negativeIndex)
// 	// const currentElement = numeri[numeri.length - 1 - i]
// 	console.log(`${i} | ${negativeIndex}:`, currentElement)
// }

// -i -1 => i = 0 => 0 -1 = -1
// -i -1 => i = 1 => -1 -1 = -2
// -i -1 => i = 2 => -2 -1 = -3
// -i -1 => i = 3 => -3 -1 = -4
// ...
// -i -1 => i = 8 => -8 -1 = -9

// 3) Generaimo 10 numeri interi random da 1 a 10
// const numbers = []

// for (let i = 0; i < 10; i++) {
// 	// console.log(i)

// 	const num = Math.floor(Math.random() * 10) + 1 // number
// 	numbers.push(num)

// 	// console.log(num)
// }

// console.log(numbers)

//
// let variabile = numbers.pop() // number
// variabile = numbers.pop // function

// 4) A partire da un array di nomi, per ogni nome stampare un messaggio: "Hello <nome>, welcome!"

const nomi = ['Anna', 'Maria', 'Giulia', 'Carlotta', 'Benedetta']
console.log(nomi)

for (let i = 0; i < nomi.length; i++) {
	const currentName = nomi[i]
	// console.log(i, currentName)
	// console.log('Hello ' + currentName + ', welcome!')
	console.log(`Hello ${currentName}, welcome!`)
}
