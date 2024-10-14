console.log('parole')

const parola1 = 'PHP' // string
const parola2 = 'Babbo' // string

// casistiche:
// 1. parola1 più lunga di parola2
// 2. parola1 più corta di parola2
// 3. parola1 e parola2 lunghe uguali

// dichiaro una variabile in cui salvo la lunghezza di parola1 (5)
const lunghezzaParola1 = parola1.length // number
console.log(lunghezzaParola1)
// dichiaro una variabile in cui salvo la lunghezza di parola2 (7)
const lunghezzaParola2 = parola2.length // number
console.log(lunghezzaParola2)

// SE lunghezza parola1 > lunghezza parola2
//    -> la parola1 è la piu lunga
// ALTRIMENTI SE lunghezza parola1 < lunghezza parola2
//    -> la parola2 è la più lungha
// ALTRIMENTI
//    -> le parola sono lunghe uguali
let message = 'Le parola sono lunghe uguali.' // string

if (lunghezzaParola1 > lunghezzaParola2) {
	// console.log(`La parola ${parola1} è la più lunga.`)
	message = `La parola ${parola1} è la più lunga.`
} else if (lunghezzaParola1 < lunghezzaParola2) {
	// console.log(`La parola ${parola2} è la più lunga.`)
	message = `La parola ${parola2} è la più lunga.`
}
// else {
// 	// console.log('Le parola sono lunghe uguali.')
// 	message = 'Le parola sono lunghe uguali.'
// }

// Output
// La parola 'Antonio' è la più lunga
console.log(message)
