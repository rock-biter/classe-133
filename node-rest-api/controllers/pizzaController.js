const pizzas = require('../data/pizzas.js')
let lastIndex = pizzas.at(-1).id

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
	// console.log(req.body)
	const { name, ingredients, image } = req.body

	// VALIDAZIONE DEI DATI

	lastIndex++

	const pizza = {
		id: lastIndex,
		name,
		ingredients,
		image,
	}

	// console.log(pizza)
	pizzas.push(pizza)

	res.status(201).send(pizza)
}

function update(req, res) {
	const id = parseInt(req.params.id)

	const pizza = pizzas.find((pizza) => pizza.id === id)

	if (!pizza) {
		res.status(404)

		return res.json({
			error: 'Pizza not found',
			message: 'La pizza non è stata trovata.',
		})
	}

	const { name, image, ingredients } = req.body
	// VALIDAZIONE DATI DEL BODY
	// update della pizza

	pizza.name = name
	pizza.ingredients = ingredients
	pizza.image = image

	res.json(pizza)
}

function modify(req, res) {
	const id = parseInt(req.params.id)

	const pizza = pizzas.find((pizza) => pizza.id === id)

	if (!pizza) {
		res.status(404)

		return res.json({
			error: 'Pizza not found',
			message: 'La pizza non è stata trovata.',
		})
	}

	const { name, image, ingredients } = req.body
	// VALIDAZIONE DATI DEL BODY
	// update della pizza
	console.log(name, image, ingredients)

	if (name) pizza.name = name
	if (ingredients) pizza.ingredients = ingredients
	if (image) pizza.image = image

	res.json(pizza)
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
