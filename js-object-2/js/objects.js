console.log('Objects')

// const userName = prompt('inserisci il nome')
// const age = parseInt(prompt('Inserisci la tua età'))
// const email = prompt('inserisci la tua email')

const userName = 'Gianluca'
const email = 'gianni@gmail.com'
const age = 34

console.log(userName, age, email)

// const user = {
// 	name: name,
// 	age: age,
// 	email: email,
// }

// const user = {
// 	name: userName,
// 	age,
// 	email,
// 	//propName: undefined
// }

// console.log(user)

// const propName = prompt('Cosa vuoi sapere del nostro utente: name, age, email') // string | null
// console.log('propName', propName)

// console.log(user)
// Leggere le prop di un Object
// Dot notation
// console.log(user.name) // Gianluca

// brackets notation
// console.log(user['age']) // 34
// console.log('user[propName]:', user[propName])
// console.log('user.propName:', user.propName) // udefined

const newUser = {}

for (const key in user) {
	console.log(user[key])
	newUser[key] = user[key]
}

// Aggiungere una proprietà dinamicamente

const propName = prompt('Nome proprietà da aggiungere') // string | null
const propValue = prompt('Inserisci il valore') // string | null

console.log(propName, propValue)

// user[propName] = propValue
const prop2 = 'CF'

const user = {
	name: userName,
	age,
	[propName]: propValue,
	[prop2]: 'LMRGLC...',
	// propName: propValue
}

// user[propName] = propValue

console.log(user)
