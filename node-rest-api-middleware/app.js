console.log('hello node')
const express = require('express')
const pizzasRouter = require('./routers/pizzas.js')
const usersRouter = require('./routers/users.js')
const checkTime = require('./middlewares/checkTime.js')
const numerifyId = require('./middlewares/numerifyId.js')
const trimString = require('./middlewares/trimString.js')
const app = express()
const port = 3000

app.use(express.static('public'))

// applichiamo il middleware globalmente
// app.use(checkTime)
// body parser application/json
app.use(express.json())
app.use(trimString) // trimma tutte le strighe che arrivano come dati nel body

app.get('/', (req, res) => {
	console.log('root')
	res.send('Ciao mondo')
})

// app.use(numerifyId)
// rotte pizzas
// applicare il midlleware a tutte le rotte che iniziano con /pizzas
// app.use('/pizzas', checkTime)
app.use('/pizzas', pizzasRouter)
app.use('/users', usersRouter)
// app.use('/comments', commentsRouter)

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})
