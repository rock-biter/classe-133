console.log('hello Express')
const express = require('express')

// console.log(express)
const app = express()
const port = 3000
// console.log(app)

// aggiungiamo funzionalità extra alla nostra app
app.use(express.static('public'))

app.get('/', (req, res) => {
	// console.log(req.query)
	// console.log(res)
	res.send(
		`
    <!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<link rel="stylesheet" href="/index.css" />
	</head>
	<body>
		<h1>Ciao sono Giangi</h1>
		<img src="/img/avatar.png" alt="" />
	</body>
</html>
`
	) // inviando la risposta al server
})

app.get('/user', (req, res) => {
	// console.log(req.query)
	// console.log(res)
	// res.send('Ciao') // inviando la risposta al server
	const user = {
		name: 'Pippo',
		age: 33,
	}

	res.json(user)
})

app.post('/', (req, res) => {
	// res.send('Ciao post')
	const user = {
		name: 'Pippo',
		age: 33,
	}

	res.json(user)
})

app.get('/about', (req, res) => {
	res.redirect('/about-us')
})

app.get('/about-us', (req, res) => {
	res.send('<h1>Pagina about</h1>')
})

app.listen(port, () => {
	console.log(`Server listing on port ${port}`)
})
