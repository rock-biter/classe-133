console.log('array methods')

// CICLARE UN ARRAY
const nomi = ['Gianni', 'Marta', 'Maria']
const numeri = [1, 5, 9, 7, 8, 6, 4, 3]
console.log(nomi)

// ciclo for
for (let i = 0; i < nomi.length; i++) {
	const nome = nomi[i]
	console.log(nome)
}

function log(el, i, array) {
	console.log(i, el, array)
}

nomi.forEach(log)
numeri.forEach(log)

nomi.forEach((nome, i) => console.log(i, nome))
numeri.forEach(function (num) {
	console.log(num)
})

// for (let element of nomi) {
// 	console.log(element)
// }

const pow2Numbers = []

numeri.forEach((num) => {
	const pow2 = num ** 2
	// console.log(pow2)
	pow2Numbers.push(pow2)
})
// map()

console.log(pow2Numbers)

let sum = 0

numeri.forEach((num) => (sum += num))
// reduce()

console.log(sum)

const oddNumbers = []

numeri.forEach((num) => {
	if (num % 2 === 1) {
		oddNumbers.push(num)
	}
})
// filter()
console.log(oddNumbers)

let finded = null
const elementToFind = 'Antonio'

console.log(nomi.includes('Marta'))
console.log(nomi.indexOf('Antonio'))

nomi.forEach((nome) => {
	if (nome === elementToFind) {
		finded = nome
	}
})

console.log(finded)

const users = [
	{
		id: 1,
		name: 'Marta',
		age: 33,
	},
	{
		id: 2,
		name: 'Antonio',
		age: 45,
	},
	{
		id: 3,
		name: 'Carlotta',
		age: 19,
	},
]

// users.includes('Marta')
let userFinded = null

users.forEach((user) => {
	if (user.id === 3) {
		userFinded = user
	}
})

// find()

console.log(userFinded)
