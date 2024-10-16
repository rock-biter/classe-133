console.log('array e ciclo for')

const nomi = ['Marco', 'Filippo', 'Pietro', 'Anna', 'Gianluca', 'Paolo']
console.log(nomi)

// console.log(nomi[0])
// console.log(nomi[1])
// console.log(nomi[2])
// console.log(nomi[3])
// console.log(nomi[4])
// console.log(nomi[5])

// Ciclare un array
let numeroIterazioni = nomi.length

for (let i = 0; i < numeroIterazioni; i++) {
	// console.log(i)
	const currentElement = nomi[i]
	console.log(i, currentElement)
}

// i = 0
// i(0) < 6 => true
// currentElement = nomi[0] => Marco
// i++ => i = 1
// i(1) < 6 => true
// currentElement = nomi[1] => Filippo
// i++ => i = 2
// i(2) < 6 => true
// currentElement = nomi[2] => Pietro
// i++ => i = 3
// i(3) < 6 => true
// currentElement = nomi[3] => Anna
// ...
