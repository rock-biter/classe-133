console.log('EX 02')

/**
 * Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

const footballTeams = [
	{
		name: 'Juventus',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Milan',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Inter',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Roma',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Napoli',
		points: 0,
		fouls: 0,
	},
]

console.log(footballTeams)
const newFootballTeams = []

for (let i = 0; i < footballTeams.length; i++) {
	const team = footballTeams[i]

	team.points = getRandomIntInclusive(0, 110)
	team.fouls = getRandomIntInclusive(0, 30)

	const newTeam = {
		name: team.name,
		fouls: team.fouls,
	}

	newFootballTeams.push(newTeam)

	// console.log(team)
}

console.log(newFootballTeams)

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}
