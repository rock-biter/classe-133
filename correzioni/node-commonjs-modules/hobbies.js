function createHobbies(...params) {
	return {
		hobbies: [...params],
	}
}

module.exports = createHobbies

// console.log(createHobbies('Lego', 'Star Wars'))
