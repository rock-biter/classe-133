const express = require('express')
const router = express.Router()

// CRUD sulla risorsa users
// index
router.get('/', (req, res) => {
	res.send("Ecco l'elenco degli utenti")
})

// show
router.get('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Ecco l'utente con id: ${id}`)
})

// store
router.post('/', (req, res) => {
	res.send('Creo un nuovo utente.')
})

// update
router.put('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Aggiorno l'utente con id: ${id}`)
})

// modify
router.patch('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Modifico l'utente con id: ${id}`)
})

// destroy
router.delete('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Elimino l'utente con id: ${id}`)
})

module.exports = router
