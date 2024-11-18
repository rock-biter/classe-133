const createHobbies = require('./hobbies.js')
const createPerson = require('./names.js')

function getPerson() {
	// const { hobbies } = createHobbies('Lego', 'Star Wars')
	const person = {
		...createPerson('Gigi', 'Baffone'),
		...createHobbies('Lego', 'Star Wars'),
		// hobbies,
	}
	// const person = createPerson('Gigi', 'Baffone')
	// const hobbiesObj = createHobbies('Lego', 'Star Wars')

	// person.hobbies = hobbiesObj.hobbies
	// console.log(hobbies)

	return person
}

console.log(getPerson())
