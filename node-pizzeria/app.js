// console.log('Hello pizzeria')

const express = require('express')
const menu = require('./pizze.js')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
	// ... const menu = []
	res.json(menu)
})

// rotta dinamica
app.get('/pizze/:id', (req, res) => {
	// tutta la logia per prendere la pizza con id === 1
	console.log(req.params)
	// qui leggo il valore dell'id che la request sta chiedendo
	const id = parseInt(req.params.id)
	const pizza = menu.find((el) => el.id === id)
	// res.send(`pizza con id: ${id}`)
	res.json(pizza)
})

// // rotta dinamica
// app.get('/pizze/:id/user/:userId', (req, res) => {
// 	// tutta la logia per prendere la pizza con id === 1
// 	console.log(req.params)
// 	// qui leggo il valore dell'id che la request sta chiedendo
// 	const id = req.params.id
// 	res.send(`pizza con id: ${id}`)
// })

// app.get('/pizze/2', (req, res) => {
// 	// tutta la logia per prendere la pizza con id === 1
// 	console.log('pizza con id 2')
// 	res.json({
// 		id: 2,
// 	})
// })

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})
