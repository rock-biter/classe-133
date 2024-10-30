console.log('Filter')

const nomi = ['Gianni', 'Marta', 'Maria', 'Ada', 'Gino']
const numeri = [1, 5, 9, 7, 8, 6, 4, 3]
const users = [
	{
		id: 1,
		name: 'Marta',
		age: 33,
		active: true,
	},
	{
		id: 2,
		name: 'Antonio',
		age: 45,
		active: false,
	},
	{
		id: 3,
		name: 'Carlotta',
		age: 17,
		active: true,
	},
]

// A partire da un array di nomi voglio ottenre un nuovo array con solo i nomi più corti di 5 lettere
console.log(nomi)
// const newNames = nomi.filter((nome) => {
// 	if (nome.length < 5) {
// 		return true
// 	}
// })

const search = 'Gi'

const newNames = nomi.filter((nome) => nome.length < 5)
const namesStartedWithM = nomi.filter((nome) => nome.at(0) === 'M')
const filteredNames = nomi.filter((nome) => nome.includes(search))

// nomi.forEach((nome) => {
// 	if (nome.length < 5) {
// 		newNames.push(nome)
// 	}
// })

console.log(newNames, namesStartedWithM, filteredNames)

// const isEven = (num) => num % 2 === 0
function isEven(num) {
	const resto = num % 2

	if (resto === 0) {
		return true
	} else {
		return false
	}
}

// a paritre da un array di numeri voglio ottere un nuovo array con i pari
// const evenNumbers = numeri.filter((num) => num % 2 === 0)
console.log(numeri)
const evenNumbers = numeri.filter(isEven)
console.log(evenNumbers)

// a paritre da un array di numeri voglio ottere un nuovo array con i dispari
const oddNumbers = numeri.filter((num) => num % 2 === 1)
console.log(oddNumbers)
// a paritre da un array di numeri voglio ottere un nuovo array con i multipli di 7

const multiplesOfSeven = numeri.filter((num) => num % 7 === 0)
console.log(multiplesOfSeven)

// un array con tutti i numeri maggio ri 0
const numeriGTZero = numeri.filter((num) => num > 0)
console.log(numeriGTZero)

// a partire da un array di utenti voglio ottere un nuovo array con gli utenti maggiorenni

// const maggiorenni = users.filter((user) => {
// 	if (user.age >= 18) return true
//   else return false
// })

const maggiorenni = users.filter((user) => user.age >= 18)
const minorenni = users.filter(({ age }) => age < 18)

console.log(maggiorenni, minorenni)

// a partire da un array di utenti voglio ottere un nuovo array con gli utenti attivi
// const activeUsers = users.filter((user) => {
// 	if (user.active === true) {
// 		return true
// 	} else {
// 		return false
// 	}
// })

// const activeUsers = users.filter((user) => user.active === true)
// const activeUsers = users.filter((user) => user.active)
const activeUsers = users.filter(({ active }) => active)

console.log(activeUsers)
