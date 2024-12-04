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
	res.json(req.pizza)
}

function store(req, res) {
	// console.log(req.body)
	const { name, ingredients, image = '', price, isAvailable = true } = req.body

	// VALIDAZIONE DEI DATI

	const errors = validate(req)

	if (errors.length) {
		// rispondere con un errore

		res.status(400)

		return res.json({
			error: 'Invalid request',
			messages: errors,
		})
	}

	lastIndex++

	const pizza = {
		id: lastIndex,
		name,
		ingredients,
		image,
		price,
		isAvailable,
	}

	pizzas.push(pizza)

	res.status(201).send(pizza)
}

function update(req, res) {
	const errors = validate(req)

	if (errors.length) {
		// rispondere con un errore

		res.status(400)

		return res.json({
			error: 'Invalid request',
			messages: errors,
		})
	}

	const { name, image, ingredients } = req.body
	// VALIDAZIONE DATI DEL BODY
	req.pizza.name = name
	req.pizza.ingredients = ingredients
	req.pizza.image = image

	res.json(req.pizza)
}

function modify(req, res) {
	const { name, image, ingredients } = req.body
	// VALIDAZIONE DATI DEL BODY
	console.log(name, image, ingredients)

	if (name) req.pizza.name = name
	if (ingredients) req.pizza.ingredients = ingredients
	if (image) req.pizza.image = image

	res.json(req.pizza)
}

function destroy(req, res) {
	const pizza = req.pizza
	const pizzaIndex = pizzas.findIndex((p) => p.id === pizza.id)

	pizzas.splice(pizzaIndex, 1)

	res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy }

function validate(req) {
	const { name, ingredients, image = '', price, isAvailable = true } = req.body

	// VALIDAZIONE DEI DATI

	const errors = []

	if (!name) {
		errors.push('Name is required')
	}

	if (!price) {
		errors.push('Price is required')
	}

	if (!ingredients) {
		errors.push('Ingredients is required')
	}

	return errors
}
