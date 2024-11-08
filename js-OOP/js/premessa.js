console.log('OOP PREMESSA')

/**
 * PROGRAMMAZIONE ORIENTATA AGLI OGGETTI
 */

const user = {
	name: 'Gianni',
	age: 56,
	email: 'ciccio@gmail.com',
	saluta: function () {
		// console.log(this)
		console.log(`Ciao mamma sono ${this.name}`)
	},
}

// const user2 = {
// 	name: 'Filippo',
// 	age: 14,
// 	email: 'fillo@gmail.com',
// 	saluta: function () {
// 		// console.log(this)
// 		console.log(`Ciao mamma sono ${this.name}`)
// 	},
// }

const user2 = createUser('Filippo', 14, 'fillo@gmail.com')
console.log(user2)

function createUser(name, age, email) {
	return {
		name: name,
		age,
		email,
		saluta() {
			// console.log(this)
			console.log(`Ciao mamma sono ${this.name}`)
		},
	}
}

const car = createCar('Fiat', 'Punto', 'ED125FG')
const car2 = createCar('Volto', 'XC60', 'HJ565XC')

car.start()
console.log(car, car2)

function createCar(brand, model, plate) {
	return {
		brand,
		model,
		plate,
		isRunning: false,
		start: function () {
			this.isRunning = true
		},
		stop: function () {
			this.isRunning = false
		},
	}
}

console.log(user.name)

user.saluta() // this === user
user2.saluta() // this === user2

const saluta = user.saluta
saluta() // this === Window

const numeri = [1, 2, 5, 6]
const nomi = ['Gaia', 'Maria']

numeri.push(5)
nomi.push('Carlo')

numeri.forEach((n) => console.log(n * 2))
nomi.forEach((nome) => console.log(nome))

numeri.includes(5)

// in_array(5,numeri) // PHP

const poligono = {
	numeroDiLati: 6,
}

const rettangolo = {
	numeroDiLati: 4,
	base: 10,
	altezza: 10,
	calcalaArea: function () {
		return this.base * this.altezza
	},
	calcalaPerimetro: function () {
		return this.base * 2 + this.altezza * 2
	},
	impostaAltezza(altezza) {
		this.altezza = altezza
	},
}

console.log(rettangolo.calcalaArea())
console.log(rettangolo.calcalaPerimetro())

const quadrato = {
	numeroDiLati: 4,
	base: 10,
	altezza: 10,
	calcalaArea: function () {
		return this.base * this.altezza
	},
	calcalaPerimetro: function () {
		return this.base * 4
	},
	impostaAltezza(altezza) {
		this.altezza = altezza
	},
}

quadrato.impostaAltezza(20)
rettangolo.impostaAltezza(23)
