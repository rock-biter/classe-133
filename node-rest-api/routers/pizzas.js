const express = require('express')
const router = express.Router()
const pizzas = require('../data/pizzas.js')

// CRUD sulla risorsa pizza
// index
router.get('/', (req, res) => {
	console.log("Ecco l'elenco delle pizze")
	res.json(pizzas)
})

// show
router.get('/:id', (req, res) => {
	const id = parseInt(req.params.id)
	console.log(`Ecco la pizza con id: ${id}`)

	const pizza = pizzas.find((p) => p.id === id)

	res.json(pizza)
})

// store
router.post('/', (req, res) => {
	res.send('Creo una nuova pizza.')
})

// update
router.put('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Aggiorno la pizza con id: ${id}`)
})

// modify
router.patch('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Modifico la pizza con id: ${id}`)
})

// destroy
router.delete('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Elimino la pizza con id: ${id}`)
})

module.exports = router
