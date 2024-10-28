console.log('Spread operator')

const numeri = [1, 2, 5, 6, 5]
// const copiaNumeri = numeri

// copiaNumeri.push(13)
// console.log(numeri)

// const copiaNumeri = []

// for (let i = 0; i < numeri.length; i++) {
// 	const num = numeri[i]
// 	copiaNumeri.push(num)
// }

// copiaNumeri.push(13)
// console.log(copiaNumeri)
// console.log(numeri)

const copiaNumeri = [12, ...numeri, 13, 56] // Array[number]
copiaNumeri.push(13)

// console.log(copiaNumeri)
// console.log(numeri)

// console.log(somma(12, 56))
// console.log(somma(...copiaNumeri))

function somma(...numeri) {
	// console.log(numeri)
	let res = 0

	for (let i = 0; i < numeri.length; i++) {
		res += numeri[i]
	}
	// return a + b
	return res
}

const user = {
	name: 'Ginaluca Lomarco',
	age: 34,
	email: 'gianni@gmail.com',
	children: ['Mario', 'Filippo'],
}

// const newUser = user
// const newUser = {}

// for (const key in user) {
// 	newUser[key] = user[key]
// }
const newUser = {
	...user,
	name: 'Mario Rossi',
	CF: 'MRSRSS...',
	children: [...user.children],
	// ...user,
}

newUser.children.push('Susanna')

// newUser.name = 'Mario Rossi'
user.CF = 'LMRGLC...'

console.log(user, newUser)

const numbers = [1, 2, 5]

const arrayContact = [...numeri, ...numbers]
console.log(arrayContact)
