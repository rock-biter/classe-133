console.log('clonare array')

// Variabili copaite per riferimento
const nomi = ['Mario', 'Gianni', 'Mimmo', 'Marcello']
console.log(nomi)

const copiaNomi = nomi
console.log(copiaNomi)

copiaNomi.push('Anita')
console.log(copiaNomi)
console.log(nomi)

console.log(copiaNomi === nomi)

// Clonare un array
const nomiClone = []

for (let i = 0; i < nomi.length; i++) {
	nomiClone.push(nomi[i])
}

nomi.push('Antonio')

nomi[1] = 'Susan'

console.log(nomi)
console.log(nomiClone)
console.log(nomi === nomiClone)

// Variabili copiare per Valore
let a = 10
let b = a

b = 25

console.log(a, b)

const nome = 'Mario'
let copiaNome = nome

copiaNome += ' è bello!'

console.log(nome, copiaNome)
