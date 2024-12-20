const pizzas = require('../data/pizzas.js')
let lastIndex = pizzas.at(-1).id

const connection = require('../data/db.js')
const { json } = require('express')

function index(req, res) {
	console.log("Ecco l'elenco delle pizze")

	const callback = (err, results) => {
		if (err) {
			res.status(500).json({ error: 'Database query failed' })
		} else {
			res.json(results)
		}
	}

	if (req.query.ingredient) {
		const sql = `
		SELECT pizzas.* 
		FROM pizzas
		JOIN ingredient_pizza AS i_p
		ON pizzas.id = i_p.pizza_id
		JOIN ingredients AS i
		ON i_p.ingredient_id = i.id
		WHERE i.name = ?`

		connection.query(sql, [req.query.ingredient], callback)
	} else {
		const sql = `SELECT * FROM pizzas`

		connection.query(sql, callback)
	}

	// let filteredPizzas = pizzas

	// // filter ingrendient
	// if (req.query.ingredient) {
	// 	// console.log(
	// 	// 	`Prendiamo solo le pizze con l'ingrediente: ${req.query.ingredient}`
	// 	// )

	// 	filteredPizzas = pizzas.filter((pizza) => {
	// 		return pizza.ingredients.includes(req.query.ingredient.toLowerCase())
	// 	})
	// }

	// ordinamento

	// limit
	// const limit = parseInt(req.query.limit)
	// if (limit && !isNaN(limit) && limit >= 0) {
	// 	filteredPizzas = filteredPizzas.slice(0, limit)
	// }

	// res.json(filteredPizzas)
}

function show(req, res) {
	const { id } = req.params

	console.log('pizza id:', id)

	const sql = `
	SELECT * 
	FROM pizzas
	WHERE id = ?
	` // SQL INJECTION

	// 	const sqlJoin = `
	// 	SELECT pizzas.*, i.name AS ingredient_name
	// FROM pizzas
	// JOIN ingredient_pizza AS i_p
	// ON i_p.pizza_id = pizzas.id
	// JOIN ingredients AS i
	// ON i.id = i_p.ingredient_id
	// WHERE pizzas.id = ?
	// `

	const sqlIngredients = `
SELECT i.* 
FROM ingredients AS i
JOIN ingredient_pizza AS i_p
ON i_p.ingredient_id = i.id
WHERE i_p.pizza_id = ?
`

	connection.query(sql, [id], (err, results) => {
		if (err) return res.status(500).json({ error: 'Database query failed' })
		if (results.length === 0)
			return res.status(404).json({ error: 'Pizza not found' })

		// console.log(results.map((el) => el.ingredient_name))
		const pizza = results[0]

		connection.query(sqlIngredients, [id], (err, ingredients) => {
			if (err) return res.status(500).json({ error: 'Database query failed' })

			pizza.ingredients = ingredients //ingredients.map((ingredient) => ingredient.name)
			res.json(pizza)
		})
	})
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
	// const pizza = req.pizza
	// const pizzaIndex = pizzas.findIndex((p) => p.id === pizza.id)

	// pizzas.splice(pizzaIndex, 1)
	const { id } = req.params

	const sql = 'DELETE FROM pizzas WHERE id = ?'
	connection.query(sql, [id], (err) => {
		if (err) return res.status(500).json({ error: 'Failed to delete pizzas' })
		res.sendStatus(204)
	})
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
