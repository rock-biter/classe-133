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

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})
