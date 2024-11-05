const people = [
	{ name: 'Paolo', age: 35 },
	{ name: 'Giulia', age: 24 },
	{ name: 'Marco', age: 67 },
]

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
people.forEach((person) => {
	console.log(person.name)
})

// con destrutturazione elemento
people.forEach(({ name }) => {
	console.log(name)
})
