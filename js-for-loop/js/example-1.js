console.log('ex-1')

// stampaimo i numeri da 1 a 100
for (let i = 0; i < 100; i++) {
	// console.log(i)
	const num = i + 1 // number
	// console.log(num)
}

// console.log(i) // Errorr variabile i non è definita
// console.log(num) // Errore: variabile num non è definita

// stampiamo i numeri pari da 1 a 100
// for (let i = 0; i < 100; i++) {
// 	const num = i + 1 // number

// 	const resto = num % 2 // number [0,1]

// 	if (resto === 0) {
// 		// il numero num è pari
// 		console.log(num)
// 	}
// }

// stampiamo tutti i numeri pari
// for (let i = 0; i < 100; i += 2) {
// 	// console.log(i)
// 	const num = i
// 	console.log(num)
// }

// stampiamo i numeri multipli di 7 da 1 a 100
// for (let i = 0; i < 100; i++) {
// 	const num = i + 1

// 	const resto = num % 7

// 	if (resto === 0) {
// 		// nume è multiplo di 7
// 		console.log(num)
// 	}
// }

for (let i = 7; i < 100; i += 7) {
	const num = i
	console.log(num)
}

// const num = Math.random() * 10 // [0-0.9999] * 10 => [0-9.999]

// console.log(num)

// generiamo 10 numeri random
// for (let i = 0; i < 10; i++) {
// 	const num = Math.random() * (i + 1) // number [0-0.999999]

// 	console.log(i, num)
// }

// stampare le prime 10 potenze del 2
// 2 ** 0 = 1
// 2 ** 1 = 2
// 2 ** 2 = 4

// for (let i = 0; i < 10; i++) {
// 	const num = 2 ** i

// 	console.log(`2 ** ${i}:`, num)
// }
