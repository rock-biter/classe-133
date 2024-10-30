console.log('Map')

const nomi = ['Gianni', 'Marta', 'Maria']
const numeri = [1, 5, 9, 7, 8, 6, 4, 3]
const users = [
	{
		id: 1,
		firstName: 'Marta',
		lastName: 'Gigi',
		age: 33,
		creditCard: {
			number: '1256..',
			expiration: '2028/02',
		},
	},
	{
		id: 2,
		firstName: 'Antonio',
		lastName: 'Gigi',
		age: 45,
		creditCard: {
			number: '1256..',
			expiration: '2028/02',
		},
	},
	{
		id: 3,
		firstName: 'Carlotta',
		lastName: 'Gigi',
		age: 19,
		creditCard: {
			number: '1256..',
			expiration: '2028/02',
		},
	},
]

// ['Marta','Antonio','Carlotta']

// a partire da un array di numeri crearte un nuovo array delle loro potenze del 2

const pow2Numbers = numeri.map((num) => num ** 2)
console.log(pow2Numbers)

// numeri.forEach((num) => {
// 	const pow2 = num ** 2
// 	// console.log(pow2)
// 	pow2Numbers.push(pow2)
// })

// a apartire da un array di nomi creare un nuovo array con i nomi tutti in maiuscolo

const namesUppercase = nomi.map((nome) => nome.toUpperCase())

// nomi.forEach((nome) => {
// 	namesUppercase.push(nome.toUpperCase())
// })

console.log(namesUppercase)

// a partire da un arrai di utenti creare un nuovo array che contento solo i nomi degli utenti

// const userNames = users.map((user) => user.name)
const userNames = users.map(({ firstName }) => firstName)

// for (let i = 0; i < users.length; i++) {
// 	const { name } = users[i]

// 	userNames.push(name)

// }
console.log(userNames)

const user2 = {
	name: 'Filippo',
	age: 32,
}

const { name, age } = user2

/**
 *  Destrutturazione dei parametri di una funzione
 * @param {Object} user
 * @returns {String}
 */
function getName({ firstName, age }) {
	return `${firstName} ha ${age} anni`
}

const name2 = getName(user2)
console.log(name2)

const mappedUsers = users.map((user) => {
	// user.fullName = `${user.firstName} ${user.lastName}`
	return {
		...user,
		creditCard: { ...user.creditCard },
		fullName: `${user.firstName} ${user.lastName}`,
	}
})

console.log(mappedUsers === users)
console.log(mappedUsers[0].creditCard === users[0].creditCard)

// mappedUsers[0].name = 'IronMan'

mappedUsers.push({
	name: 'Gianni',
})

// mappedUsers.forEach((user) => {
// 	const message = `Benvenuto ${user.fullName}`
// 	console.log(message)
// })

console.log(users, mappedUsers)

// const utente = {
// 	name: 'gigi',
// 	age: 23,
// 	cf: 'LMRGL89...',
// }
