console.log('Reduce')

const numeri = [1, 5, 9, 7, 8, 6, 4, 3]
console.log(numeri)

console.log('ciao')

// let sum = 0

// numeri.forEach((num) => (sum += num))

// console.log(sum)

// const sum = numeri.reduce((acc, num) => {
// 	console.log(acc, num)
// 	acc += num
// 	// console.log(acc)
// 	return acc
// }, 0)

const sum = numeri.reduce((acc, num) => acc + num, 0)

console.log(sum)

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

const bike = racingBikes.reduce((acc, bike) => {
	console.log(acc, bike)

	if (acc.weight < bike.weight) {
		return acc
	} else {
		return bike
	}
})

console.log(bike)
