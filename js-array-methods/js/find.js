console.log('Find')

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

console.log(nomi.includes('Marta')) // true
console.log(nomi.indexOf('Antonio')) // -1
console.log(nomi.find((nome) => nome === 'Marta')) // 'Marta'

console.log(users.includes('Marta')) // false

const marta = {
	id: 10,
	name: 'Marta',
	age: 33,
	active: true,
}

console.log(users.includes(marta)) // false

const finded = users.find((user) => user.id === marta.id) // Object | undefined
console.log(finded)
const findedIndex = users.findIndex(({ id }) => id === marta.id)
console.log(findedIndex)

if (findedIndex >= 0) {
	users.splice(findedIndex, 1)
	console.log(users)
}

// if (finded !== undefined) {
// 	// abbiato trovato quello che cercavamo
// 	console.log(finded.name)

// 	const index = users.indexOf(finded)
// 	console.log(`Eliminiamo l'utente all'indice ${index}`)
// } else {
// 	console.log('Non ho trovato quello che cercavi')
// }
