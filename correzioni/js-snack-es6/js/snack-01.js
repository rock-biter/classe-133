console.log('EX 01')
/**
 * Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */

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

console.log(racingBikes)

let bike = racingBikes[0]

// ciclo for per confrontare i pesi delle bici
for (let i = 1; i < racingBikes.length; i++) {
	const currentBike = racingBikes[i]
	// console.log(currentBike, bike)

	if (currentBike.weight < bike.weight) {
		// console.log(
		// 	`La bici: ${currentBike.name} è più leggera della bici: ${bike.name}`
		// )
		bike = currentBike // currentNike diventa la bici più leggera
	} else {
		// console.log(
		// 	`La bici: ${bike.name} è più leggera della bici: ${currentBike.name}`
		// )
	}
}

// stampare la bici piu leggera
console.log(bike)

// ordinare l'array di bici
const sortedBikes = racingBikes.sort((a, b) => a.weight - b.weight)
console.log(sortedBikes)

console.log(sortedBikes[0])
