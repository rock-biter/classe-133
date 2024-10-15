console.log('ex-3')

// per tutti i numeri da 1 a 100, calcola il doppio del numero e stampalo se è multiplo di 6
// num iterazioni: 100
for (let i = 0; i < 100; i++) {
	// console.log(i)
	let num = i + 1 // number
	let double = num * 2 // number
	// console.log(`${i}:`, num)
	// console.log(`${i}:`, num, double)

	let resto6 = double % 6 // number [0,1,2,3,4,5]
	let resto5 = double % 5 // number

	if (resto6 === 0) {
		// il numero è divisibile per 6
		console.log(double)
	}

	if (resto5 === 0) {
		// il numero è divilsibile per 5
		console.log(num)
	}

	console.log('-----')
}
