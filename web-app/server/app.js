const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const notFound = require('./middlewares/notFuond')
const errorsHandler = require('./middlewares/errorsHandler')
const bookRouter = require('./routers/bookRouter')

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
	})
)
app.use(express.json()) // body parser
// middleware trim
// middleware nullify empty string
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send('Server is running')
})

// registrare le rotte books '/api/books'
app.use('/api/books', bookRouter)

app.use(errorsHandler)

app.use(notFound)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
