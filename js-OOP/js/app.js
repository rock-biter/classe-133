console.log('OOP')

// DICHIARAZIONE DELLA CLASSE USER
class User {
	// descrivere le proprietà e i metodi che avranno gli oggetti creati a partire da questa classe

	// Prorpietà, Attributi, Variabili di istanza degli oggetti User
	userName
	email
	active

	constructor(_userName, _email, _active = true) {
		console.log('costruttore della classe User', _userName, _email)

		this.active = _active
		this.email = _email
		// this.userName = _userName
		this.setUserName(_userName)
	}

	setActive(val) {
		// console.log('set active', val)
		this.active = val
	}

	setUserName(userName) {
		if (typeof userName === 'string') {
			this.userName = userName
		} else {
			console.error('UserName is not a string')
			// throw new Error('userName is not a string')
		}
	}
}

// console.log(User)
// CREARE UN ISTANZA DI UNA CLASSE
const user1 = new User('Giannetto', 'gian@gamil.com', false)
// user1.setUserName(123)
// user1.userName = 'Giannetto'
// user1.email = 'Gian@gamil.com'

//User.setActive(true) // Errore, NON POSSIAMO INVOCARE UN METODO DIRETTAMENTE DALLA CLASSE

// console.log(User.userName)

// const user1Clone = {
// 	...user1,
// }

// user1.setActive(false) // this === user1

const user4 = new User('Ciccio', 'ciccio@gmail.com')
// user4.setUserName('Ciccio') // this === user4

// user4.age = 34 //possiamo anche aggiungere proprietà non descritte nella classe (NON HA SENSO FARLO QUASI MAI)

console.log(user1, user4)

const user2 = {
	userName: 'Gianni',
}
console.log(user2)

const user3 = new Object()
console.log(user3)

console.log(user1 instanceof User) // true
console.log(user2 instanceof User) // false
console.log(user1 instanceof Object) // true

const now = new Date()
console.log(now.getFullYear(), now.getHours(), now.getDate())

const time = Date.now() // metodo statico
console.log(time)

// const nome = new String('ciao')
// console.log(nome.to)

const numeri = new Array(10)
console.log(numeri)

const isEven = new Boolean(0)
console.log(isEven)

// Math.random()
// Math.PI

class Rect {
	static lati = 4

	static getLati() {
		return Rect.lati
	}

	base = 0
	altezza = 0

	constructor(_base, _altezza) {
		this.base = _base
		this.altezza = _altezza
	}

	area() {
		return this.base * this.altezza
	}

	perimetro() {
		return this.base * 2 + this.altezza * 2
	}
}

const rect1 = new Rect(6, 4)
const rect2 = new Rect(3, 3.5)

console.log(rect1, rect2)

if (rect1.area() > rect2.area()) {
	console.log('Rettangolo 1 ha un area maggiore')
}

console.log(`Tutti i rettangoli hanno ${Rect.getLati()} lati.`)

class Dog {
	static numOfLegs = 4
}

class Labrador {
	static razza = 'Labrador'
}

// Singleton (Design Pattern)
class Game {
	static instance

	static create() {
		// ...

		if (Game.instance) {
			return Game.instance
		}

		Game.instance = new Game()
		return Game.instance
	}
}

// const game = new Game()
const game = Game.create()
const game2 = Game.create()
console.log(game === game2)
