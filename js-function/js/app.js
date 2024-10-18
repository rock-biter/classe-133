console.log('function')

// FUNCTION SOGGETTE A HOISTING => possiamo usarle anche prima della loro dichiarazione
// saluta()

// DICHIARAZIONE DELLA FUNZIONZE
function saluta() {
	// qui il codice della funzione
	console.log('Ciao Mondo!')
}

const message = 'Ciao mamma!'
// INVOCAZIONE DELLA FUNZIONE
saluta(message) // la variabile message viene ignorata dalla funzione

// ciao() // Uncaught ReferenceError: ciao is not defined at

// DICHIARAZIONE DI UNA FUNZIONE CON PARAMETRI
function sum(a, b) {
	const result = a + b
	// console.log(a, b)
	// console.log(result)
	return result
}

// INVOCAZIONE DI UNA FUNZIONE CON PARAMETRI
const somma = sum(5, 10)
// console.log(result) // Errore result is not defined
console.log(somma)

sum('Ciao', ' mamma!')

// console.log(result) // Errore result is not defined

// DICHIARAZIONE FUNZIONE SALUTA CON PARAMETRO
function salutaUtente(name) {
	// name = name.toUpperCase()
	console.log(`Ciao ${name}!`)
}

let userName = 'Mario'
salutaUtente(userName)
// salutaUtente()
// console.log(userName)

salutaUtente('Maria')
salutaUtente('Carlo')
salutaUtente('Miriam')
salutaUtente('Anita')
salutaUtente('Filippo')
salutaUtente(12)

console.log(sum(10, 10))
console.log(sum)

const faiSomma = sum // function
// const num = parseInt( prompt('Inserisci un numero') )

console.log(faiSomma(25, 13))

const arryaFunzioni = [sum, saluta] // Array [ Function]

// NON FATELO MAIIIIIIII
const log = console.log
log('ciao')
