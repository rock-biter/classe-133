const a = 15

// if (a > 3 && a < 10) {
// 	console.log('Il numero è compreso nel range')
// } else {
// 	console.log('il numero non è compreso nel range')
// }

// if (a <= 3 || a >= 10) {
// 	console.log('il numero non è compreso nel range')
// } else {
// 	console.log('Il numero è compreso nel range')
// }

const user = {
	name: 'Giangi',
	saluta() {
		console.log(`Ciao mi chiamo ${this.name}.`)
	},
}
// const user = undefined

// user ? user.saluta() : null

// user && user.saluta()
// const name = user && user.name
// const name = user?.name

let result = 'Giandi' && 'Giuseppe' // Giuseppe
result = '' && 'Giuseppe' // ''
// result = null && 'Giuseppe' // null
// result = undefined && 'Giuseppe' // undefined
// result = 0 && 'Giuseppe' // 0

// if (user) {
// 	user.saluta()
// }

const name1 = null
const name2 = undefined
const name3 = 'Pippo'

result = 'Giangi' || 'Giuseppe' // Giangi
result = '' || 'Giuseppe' // Giuseppe
result = 0 || 'Giuseppe' // Giuseppe
result = name1 || name2 || name3 // Giuseppe

console.log(result) // true? Giangi? Giuseppe?
