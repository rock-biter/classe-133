function index(req, res) {
	res.send("Ecco l'elenco degli utenti")
}

function show(req, res) {
	const id = req.params.id
	res.send(`Ecco l'utente con id: ${id}`)
}

function store(req, res) {
	res.send('Creo un nuovo utente.')
}

function update(req, res) {
	const id = req.params.id
	res.send(`Aggiorno l'utente con id: ${id}`)
}

function modify(req, res) {
	const id = req.params.id
	res.send(`Modifico l'utente con id: ${id}`)
}

function destroy(req, res) {
	const id = req.params.id
	res.send(`Elimino l'utente con id: ${id}`)
}

module.exports = { index, show, store, update, modify, destroy }
