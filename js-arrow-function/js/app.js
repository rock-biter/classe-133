console.log('Arrow Function')

// traditional function
function somma(a, b) {
	return a + b
}

console.log(somma(5, 12))
console.log(somma(0, -52))

//  arrow function con ritorno ESPLICITO
// const sum = (a, b) => {
// 	return a + b
// }

// arrow function con ritorno IMPLICITO
const sum = (a, b) => a + b
// const res = a + b // qui siamo fuori dal copro della funzione con ritorno implicito

console.log(sum(5, 12))
console.log(sum(12, 36))

// const nuovaFn = somma
// const altraFn = sum

// console.log(nuovaFn(5, 6))
// console.log(altraFn(3, 2))

// function isEven(num) {
//   return num % 2 === 0
// }

const isEven = (num) => num % 2 === 0

console.log(isEven(10))
console.log(isEven(5))
console.log(isEven(16))
console.log(isEven(31))

const log = (value) => console.log(value)

log(10)
log('ciao')
log('ciao mamma')
const res = log([13, 15, 46])
console.log(res)

/**
 *
 * @param {Array} array
 * @param {Function} funzione
 */
function perOgni(array, funzione) {
	console.log(array, funzione)

	for (let i = 0; i < array.length; i++) {
		const element = array[i]

		// console.log(element)
		const res = funzione(element)
		console.log(res)
	}
}

const numeri = [10, 2, 6, 95, 48, 0]

function pow2(num) {
	return num ** 2
}
// const pow2 = (num) => {
//   return num ** 2
// }
// const pow2 = (num) => num ** 2

function mod3(num) {
	return num % 3
}

perOgni(numeri, pow2)
perOgni(numeri, mod3)

console.log('-----')

console.log(mod3(10))
console.log(pow2(3))

console.log('-----')

perOgni(numeri, (val) => val * 2)
perOgni(numeri, (val) => {
	return val * 2
})
perOgni(numeri, function (val) {
	return val * 2
})
