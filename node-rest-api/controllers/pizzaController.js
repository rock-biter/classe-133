const pizzas = require('../data/pizzas.js')

function index(req, res) {
	console.log("Ecco l'elenco delle pizze")

	let filteredPizzas = pizzas

	// filter ingrendient
	if (req.query.ingredient) {
		// console.log(
		// 	`Prendiamo solo le pizze con l'ingrediente: ${req.query.ingredient}`
		// )

		filteredPizzas = pizzas.filter((pizza) => {
			return pizza.ingredients.includes(req.query.ingredient.toLowerCase())
		})
	}

	// ordinamento

	// limit
	const limit = parseInt(req.query.limit)
	if (limit && !isNaN(limit) && limit >= 0) {
		filteredPizzas = filteredPizzas.slice(0, limit)
	}

	res.json(filteredPizzas)
}

function show(req, res) {
	const id = parseInt(req.params.id)
	console.log(`Ecco la pizza con id: ${id}`)

	const pizza = pizzas.find((pizza) => pizza.id === id)
	let result = pizza

	if (!pizza) {
		console.log('Pizza non trovata')

		res.status(404)
		result = {
			error: 'Pizza not found',
			message: 'La pizza non è stata trovata.',
		}

		// res.json({
		// 	error: 'Pizza not found',
		// 	message: 'La pizza non è stata trovata.',
		// })

		// return
	}

	res.json(result)
}

function store(req, res) {
	res.send('Creo una nuova pizza.')
}

function update(req, res) {
	const id = req.params.id
	res.send(`Aggiorno la pizza con id: ${id}`)
}

function modify(req, res) {
	const id = req.params.id
	res.send(`Modifico la pizza con id: ${id}`)
}

function destroy(req, res) {
	const id = parseInt(req.params.id)
	console.log(`Elimino la pizza con id: ${id}`)

	const pizzaIndex = pizzas.findIndex((pizza) => pizza.id === id)

	if (pizzaIndex === -1) {
		res.status(404)

		return res.json({
			error: 'Pizza not found',
			message: 'La pizza non è stata trovata.',
		})
	}
	// console.log(pizzaIndex)

	pizzas.splice(pizzaIndex, 1)

	res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy }
