const nums = [2, 8, 4, 7, 12, 87]

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNumbers = nums.filter((num) => {
	if (num % 2 === 0) {
		// il numero è pari
		return true
	}

	return false
})

console.log(evenNumbers)
// versione compatta con ritorno implicito della condizione da verificare
console.log(nums.filter((num) => num % 2 === 0))
