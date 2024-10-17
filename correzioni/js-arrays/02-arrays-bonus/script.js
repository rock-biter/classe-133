const teachers = ['Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca'] // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = []

for (let i = 0; i < teachers.length; i++) {
	const currentEl = teachers.at(-i - 1)
	reversedTeachers.push(currentEl)
}
// const reversedTeachers = teachers.toReversed()
console.log(teachers)
console.log(reversedTeachers)
// console.log(teachers === reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []

for (let i = 0; i < teachers.length; i++) {
	const currentName = teachers[i]
	if (currentName.length >= 5) {
		longNames.push(currentName)
	}
}

// console.log(longNames)
// const longNames = teachers.filter((name) => name.length >= 5)
// console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
const EdIndex = teachers.indexOf('Ed') // number [-1,length - 1]
if (EdIndex >= 0) {
	// rimuovere elemento all índice EdIndex
	teachers.splice(EdIndex, 1)
}

console.log(teachers)

// 4. Aggiungi 'Maria' Tra Phil e Carlo (3)
teachers.splice(3, 0, 'Maria')
console.log(teachers)
