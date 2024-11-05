const students = [
	{
		id: 1,
		name: 'Marco Lanci',
		age: 32,
		class: '3C',
	},
	{
		id: 2,
		name: 'Mario Banfi',
		age: 34,
		class: '4A',
	},
	{
		id: 3,
		name: 'Luigi Banzi',
		age: 33,
		class: '5B',
	},
]

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// OPTIONAL CHAINING
const studentClass = students.find((el) => el.name === 'Marco')?.class || '' // Object | undefined

console.log(studentClass)

// const studentClass = student ? student.class : ''

// let studentClass = ''
// if (student) {
// 	studentClass = student.class
// }

// console.log(studentClass)
