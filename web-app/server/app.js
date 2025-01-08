const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const notFound = require('./middlewares/notFuond')
const errorsHandler = require('./middlewares/errorsHandler')
const bookRouter = require('./routers/bookRouter')

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
