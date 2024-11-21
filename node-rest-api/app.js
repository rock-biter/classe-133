console.log('hello node')
const express = require('express')
const pizzasRouter = require('./routers/pizzas.js')
const usersRouter = require('./routers/users.js')
const app = express()
const port = 3000

app.use(express.static('public'))
// body parser application/json
app.use(express.json())

app.get('/', (req, res) => {
	console.log('root')
	res.send('Ciao mondo')
})

// rotte pizzas
app.use('/pizzas', pizzasRouter)
app.use('/users', usersRouter)
// app.use('/comments', commentsRouter)

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})
