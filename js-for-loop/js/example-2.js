console.log('ex-2')

// const word = 'Java'
// const text =
// 	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sapiente aperiam quae voluptates esse architecto qui aut, eveniet earum!'

// console.log(text.charAt(138))
// console.log(word.charAt(3))
const textToIterate = prompt('Scrivi un testo e ti farò lo spelling.') // string | null
console.log(textToIterate)
if (textToIterate !== null) {
	const numeroIterazioni = textToIterate.length // number

	for (let i = 0; i < numeroIterazioni; i++) {
		// console.log(i)
		const char = textToIterate.charAt(i)

		console.log(i, char)
	}
} else {
	alert('Impossibile fare lo spelling.')
}

// console.log(word.charAt(0))
// console.log(word.charAt(1))
// console.log(word.charAt(2))
// console.log(word.charAt(3))
// console.log(word.charAt(4))
// .....
