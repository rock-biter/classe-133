console.log('numeri')

// alert('ciao utente')
// 1. PREPARAZIONE E ACQUISIZIONE DEI DATI
const userAge = prompt('Inserisci la tua età') // string | null
const otherAge = parseInt(prompt("Insrisci l'età di un'altra persona.")) // number

const numberUserAge = parseInt(userAge) // converte userAge ritornandoci un number (intero) [non modifica la variabile useAge]
console.log(numberUserAge)

// console.log('dopo il promt', age, typeof age)
console.log(userAge, otherAge)

// ESECUZIONE DELLA LOGICA / ALGORITMO

let message = ''

if (numberUserAge > otherAge) {
	message = 'Sei più grande tu.'
} else if (numberUserAge < otherAge) {
	message = 'È più grande lui/lei.'
} else {
	message = 'Avete la stessa età.'
}

// 3. OUTPUT
console.log(message)
