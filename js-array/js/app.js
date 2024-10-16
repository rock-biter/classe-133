console.log('Array 1')

let numero = 24 // number
const numeri = [24, 36, 0, 59, 1, 2, 45, 75] // array[ number ]

console.log(numeri)

// leggere la lunghezza di un array
const lunghezzaNumeri = numeri.length
console.log(lunghezzaNumeri)

// leggere un elemento dell'array (indice 3)
numero = numeri[3] // number (1)
console.log('index 3:', numero)

numero = numeri.at(3) // number (1)
console.log('index 3:', numero)

// Leggere ultimo elemento di un array
const lastIndex = numeri.length - 1 // number
let lastNumber = numeri[lastIndex] // number (75)
console.log('last number:', lastNumber)

lastNumber = numeri.at(-1) // number (75)
console.log('last number:', lastNumber)

// Leggere il primo elemento di un array
let firstNumber = numeri.at(0) // number
firstNumber = numeri[0]

console.log('firstNumber', firstNumber)

// leggere un elemento che non esiste nell'array (undefined)
console.log(numeri[10], numeri.at(-20)) // undefined undefined

/**
 *
 * AGGIUNGERE ELEMENTI IN UN ARRAY
 *
 */

// Aggiungere un elemento/i alla fine  del nostro array

numeri.push(100, 50, 150, 1, 0, 0, 0, 0, 16) // number

console.log(numeri)
console.log(numeri.at(-1)) // 16

numeri[100] = 12 // aggiungendo il numero 12 alla posizione 100
numeri[11] = 10 // sostituendo il numero 0 con il numero 10 alla posizione 11

console.log(numeri)

// Aggiungere un elemento/i all'inizio dell'array

numeri.unshift(5, 15, 16)
console.log(numeri)

// Togliere un elemento dalla fine dell'array
lastNumber = numeri.pop() // number | undefined
console.log(numeri, lastNumber)

// Togliere un elementa dall'inizo dell'array
firstNumber = numeri.shift() // number | undefined
console.log(numeri, firstNumber)

// Togliere/Aggiungere/Sostituire uno o più elementi in una posizione qualsiasi dell'array (splice)

// ottere una porzione di un array
const newArray = numeri.slice(5, -90)
console.log(numeri, newArray)

// dichiare un array vuoto
const nomi = [] // Array[string]

// sapere se un uelemento è presente o no in un array
numero = 0

const ePresente = numeri.includes(numero) // boolean
console.log(ePresente)

// conoscere la posizione di un elemento in un array
const elementIndex = numeri.indexOf(numero, 9)
console.log(elementIndex)
