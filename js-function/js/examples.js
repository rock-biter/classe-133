console.log('Funzione axamples')

// 1. Definire una funzione che generi un numero intero random da 1 a n dove n è un parametro della funzione

// function randomIntFromOneTo(max) {
// 	// controlli sui parametri
// 	if (typeof max !== 'number') {
// 		console.error('Num need to be a number')
// 		return // qui la funzione termina ritornando undefined se la consdizione è vera
// 	}

// 	// console.log(max)
// 	const randomInt = Math.floor(Math.random() * max) + 1

// 	// return Number
// 	return randomInt
// }

// const num = randomIntFromOneTo(10)
// console.log(num)

// console.log(randomIntFromOneTo(100))
// console.log(randomIntFromOneTo(50))
// console.log(randomIntFromOneTo('5'))
// console.log(randomIntFromOneTo(-10))
// console.log(randomIntFromOneTo(5000))

// 2. Definire una funzione che generi un numero intero random da un valore minimo a un valore massimo

// function randomIntBetween(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const altroNum = randomIntBetween(5, 10) // number
// console.log(randomIntBetween(0, 10))
// console.log(randomIntBetween(11, 20))
// console.log(randomIntBetween(21, 30))
// console.log(randomIntBetween(50, 150))
// console.log(randomIntBetween(1, 1000))

// 3. definire una funzione che ritorna true quando un numero (passato come parametro) è pari e false quando il numero (passato come parametro) è dispari

// function isEven(n) {
// 	const resto = n % 2
// 	// console.log(resto)

// 	// return boolean
// 	// SE n è pari
// 	//    - return true
// 	// ALTRIMENTI
// 	//    - return false
// 	if (resto === 0) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(isEven(0))
// console.log(isEven(1))
// console.log(isEven(10))
// console.log(isEven(33))
// console.log(isEven(10215))

// // Se il numero è pari
// if (isEven(8)) {
// 	console.log('il numero è pari')
// } else {
// 	console.log('il numero è dispari')
// }

// 4. definire una funzione che ritorna true quando un numero (passato come parametro) è disapri e false quando il numero (passato come parametro) è pari

// function isOdd(n) {
// 	// A) versione super compatta usando la funzione isEven
// 	// return !isEven(n)

// 	// B) versione estesa usando al funzione isEven
// 	// SE il numero è pari
// 	//  - ritorna false
// 	// ALTRIMENTI
// 	//  - ritorna true
// 	// if (isEven(n)) {
// 	// 	return false
// 	// } else {
// 	// 	return true
// 	// }

// 	// C) versione senza funzione isEven
// 	const resto = n % 2

// 	if (resto === 0) {
// 		return false
// 	} else {
// 		return true
// 	}
// }

// if (isOdd(11)) {
// 	console.log('il numero è disapri')
// } else {
// 	console.log('il numero è pari')
// }

// 5. funzione che determina se un numera A è multiplo di un numero B

// function isMultiple(numA, numB) {
// 	if (numA % numB === 0) {
// 		return true
// 	}

// 	return false
// }

// const result = isMultiple(14, 5) // boolean
// console.log(result)

// 6. Definire una funzione che riceva una stringa come parametro e restituisca una nuova stringa che sia la stringa invertita( es. input 'ciao' => output 'oaic')

const myText = 'Ciao'

function stringReverse(text) {
	let newText = ''
	// let newChars = []

	// invertire la stringa text
	for (let i = 0; i < text.length; i++) {
		// console.log(i)
		const char = text.at(-i - 1)
		console.log(i, char)
		// newChars.push(char)
		newText += char
		// console.log(newText)
	}

	// console.log(newChars, newChars.join(''))
	// return string
	// return newChars.join('')
	return newText

	// return char
}

const reversedText = stringReverse(myText) // string
console.log(reversedText) // 'oaiC'
