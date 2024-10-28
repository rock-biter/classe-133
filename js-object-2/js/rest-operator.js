console.log('REST operator')

function somma(...numeri) {
	// console.log(numeri)
	let res = 0

	for (let i = 0; i < numeri.length; i++) {
		res += numeri[i]
	}
	// return a + b
	return res
}

console.log(somma(12, 56))
console.log(somma(5, -4))
console.log(somma(10, 16, 2, 3))
console.log(somma(10))
console.log(somma())
