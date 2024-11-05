const numbers = [2, 8, 4, 7, 2, 87]

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// const incrementedNumbers = numbers.map((number) => {
// 	return number + 1
// })

// con ritorno implicito
const incrementedNumbers = numbers.map((number) => number + 1)

console.log(incrementedNumbers)
