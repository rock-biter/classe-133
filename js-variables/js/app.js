const firstName = 'Gianluca' // string

console.log('Ciao ' + firstName) // concatenazione

// const firstNameLength = firstName.length
const myMessage = "Il nome dell'utente è lungo " + firstName.length + '.'

let userName
console.log(userName)

const lastName = 'Lomarco' // string
console.log(lastName)

// dichiariamo una variabile age di tipo number
const age = 43 // number
// controllare di che tipo è una variabile
console.log(typeof age)

let numberA = 10 // number
let numberB = 15 // number

// fai la somma dei numeri A e B
let somma = numberA + numberB // number (25)
console.log(somma)

numberA = '8' // string
numberB = 3 // number

somma = numberA + numberB // string ('83')
console.log(somma)

let sub = numberA - numberB // number (5)
console.log(sub)

numberA = 'ciao' // string
console.log(sub)

sub = numberA - numberB // number (NaN)
console.log(sub)
console.log(typeof sub) // number

const controllo = isNaN(sub)
console.log('controllo:', controllo)

// template literal
userName = 'Mimmo'

// stamap il messaggio 'Ciao <userName> <lastName>, benvenuto nella mostra app!'
// const message = 'Ciao ' + userName + ' ' + lastName + ', benvenuto nella mostra app!'

const message = `Ciao ${userName} ${lastName}, benvenuto nella mostra app!` //string
console.log('message:', message)

// stampa la lunghezza della stringa message
const messageLength = message.length // number
console.log('messageLength:', messageLength)
const messageUppercase = message.toUpperCase() //string

console.log('messageUppercase:', messageUppercase)
console.log(message) // message non è stato modificato dal metodo toUpperCase()

const className = 'd-flex justify-content-center alisgn-items-center'
// const html = '<div><h1 class="' + className + '">Ciao</h1></div>'
const html = `
<div>
  <h1 class="${className}">Ciao</h1>
</div>
`

console.log(html)

//
let text = 'Ciao'
let textLength = text.length

// utente cambia text
text = 'Sono contento!'

// SE text.length > text.length

// metodi stringhe

// Prendere un singolo carattere da una stringa in base alla paosizione
text = 'Questo testo è lungo lungo?'
const firstChar = text.charAt(0) // string
const lastChar = text.charAt(text.length - 1) // string
const char = text.at(5)
console.log('firstChar:', firstChar)
console.log('lastChar:', lastChar)
console.log('char:', char)

console.log(text.at(-3)) // per partide dal fondo

// replace di porzioni di stringhe
const newText = text.replaceAll('lungo', 'corto') // string
console.log('newText:', newText)
console.log(text) // text non viene modificada dalmetodo replace

//  capire se una stringa continen una sottostring
const risultato = newText.includes('lungo') // boolean
console.log('risultato:', risultato)

// ottenere una porzione di stringa a partire da una stringa più lunga
const subString = text.slice(3, -3) // string
console.log('subString:', subString)
