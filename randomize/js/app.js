const studenti = [
	'Giovanni	Arduini',
	'Rocco Gianangelo Massimo	Balbino',
	'Francesco	Cifaldi',
	'Leonardo	Corazzini',
	'Arianna	Cristiani',
	"Giovanbattista	D'Amico",
	'Mattia	Esposito',
	'Simone	Domenici',
	'Tabish	Faisal',
	'Riccardo	Fiacco',
	'Filippo	Gasparini',
	'Leonardo	Guglielmini',
	'Vincenzo	Iuliano',
	'Yahya	Laassel',
	'Alessio	Macrì',
	'Lorenzo	Malatesta',
	'Damiano	Mariscoli',
	'Damiano	Maugeri',
	'Gianluca	Milesi',
	'Giulia	Moiraghi',
	'Andrea	Potenza',
	'Gioi	Pronestì',
	'Alessandro	Puglisi',
	'Klaus	Qama',
	'Eduardo	Rocco',
	'Leonardo Rosales	Huerta',
	'Antonio	Russo',
	'Lorenzo	Scalvini',
	'Christian	Scarabelli',
	'Marco	Stagliano',
	'Alessio	Tegoni',
	'Gabriele	Tuzzo',
	'Alessandro	Venturi',
	'Francesco	Vita',
]

function getRandomElement(studenti) {
	const i = Math.floor(Math.random() * studenti.length)

	return studenti[i]
}

const studentEl = document.getElementById('student')
const randomizeButton = document.getElementById('randomize')

randomizeButton.addEventListener('click', () => {
	studentEl.innerHTML = getRandomElement(studenti)
})
