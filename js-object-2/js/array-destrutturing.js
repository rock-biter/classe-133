console.log('Array destrutturazione')

const userName = ['Gianluca', 'Lomarco', 'Mr']

// const firstName = userName[0]
// const lastName = userName[1]
// const ...

// const [firstName, lastName] = userName

// console.log(firstName, lastName)

// const lastName = userName[1]
const [firstName, , lastName] = userName

console.log(firstName, lastName)

const racingBikes = [
	{
		name: 'Bianchi Specialissima',
		weight: 6.2,
	},
	{
		name: 'Cannondale SuperSix EVO',
		weight: 6.8,
	},
	{
		name: 'Trek Emonda',
		weight: 6.7,
	},
	{
		name: 'Specialized Tarmac SL7',
		weight: 5.9,
	},
	{
		name: 'Pinarello Dogma F',
		weight: 6.6,
	},
]

const [bike, ...altreBici] = racingBikes
const { weight } = bike //
// const weight = racingBikes[0].weight

console.log(bike, altreBici)
const text = 'ciao'
const [firstChar, ...rest] = text
const capitalized = firstChar.toUpperCase() + rest.join('').toLowerCase()
console.log(firstChar, rest)
console.log(capitalized)
