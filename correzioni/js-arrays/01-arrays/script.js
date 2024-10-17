const teachers = ['Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca'] // NON MODIFICARE QUESTA VARIABILE
console.log(teachers)

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]
console.log(fourthTeacher)

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = 'Patrick'
// teachers.splice(4, 1, 'Patrick')
console.log(teachers)
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop()
console.log(lastTeacher)
console.log(teachers)

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift()
console.log(firstTeacher)
console.log(teachers)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa')
// teachers[teachers.length] = 'Carlo'
console.log(teachers)

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah')
console.log(teachers)

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio')
console.log(isFabioPresent)

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis')
console.log(lewisIndex)

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(', ')
console.log(teachersString)

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0
console.log(isTeachersEmpty)
