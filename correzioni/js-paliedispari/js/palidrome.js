console.log('Palindroma')
/**
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 */

// 'Parola'
// 'Parola' === 'aloraP' => false
// 'Anna' === 'annA' => false
// 'Anna' => 'anna' === 'anna' => true

// chiediamo una parola all'utente
const parola = prompt('Inserisci una parola e ti dirò se è palindroma.')
console.log(parola)

// SE parola è palindroma
//  - dichiame che la parola è palindroma
// ALTRIMENTI
//  - diciamo che non è palindroma

if (isPalindrome(parola)) {
	console.log(`La parola '${parola}' è palindroma`)
} else {
	console.log(`La parola '${parola}' non è palindroma`)
}

// function isPalindrome(word) {
// 	word = word.toLowerCase().replaceAll(' ', '')
// 	console.log(word)

// 	const halfLength = Math.floor(word.length / 2)

// 	for (let i = 0; i < halfLength; i++) {
// 		const char = word.charAt(i)
// 		const charFromEnd = word.at(-i - 1)
// 		// console.log(char, charFromEnd)

// 		if (char !== charFromEnd) {
// 			return false
// 		}
// 	}

// 	return true
// }

function isPalindrome(word) {
	word = word.toLowerCase()
	const reversedWord = stringReverse(word)

	console.log(word)
	console.log(reversedWord)

	// SE text === reversedText
	//  - return true
	// ELSE
	//  - return false
	if (word === reversedWord) {
		return true
	} else {
		return false
	}

	// return boolean
}

function stringReverse(text) {
	let newText = ''

	// invertire la stringa text
	for (let i = 0; i < text.length; i++) {
		const char = text.at(-i - 1)
		// console.log(i, char)
		newText += char
	}

	return newText
}
