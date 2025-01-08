const connection = require('../data/db')

function index(req, res) {
	// recuperiamo l'elenco dei books

	let sql = `SELECT * FROM books`

	// BONUS: aggiungere eventuali filtri
	// if (req.query.title) {
	// 	sql += ` WHERE title LIKE '%${req.query.title}%'`
	// }

	// BONUS: aggiungere paginazione
	// BONUS: aggiungere ordinamento

	connection.query(sql, (err, books) => {
		// console.log(err)
		if (err) return res.status(500).json({ message: err.message })

		// BONUS: se abbiamo l'elenco di libri recuperare la media delle valutazioni di ogni libro

		res.json(books)
	})
}

function show(req, res) {
	// console.log(req.params.id)
	const id = req.params.id
	// if(isNaN(id))

	const sql = `SELECT * FROM books WHERE id = ?`

	connection.query(sql, [id], (err, results) => {
		if (err) return res.status(500).json({ message: err.message })
		if (results.length === 0)
			return res.status(404).json({
				error: 'Not Found',
				message: 'Book not found',
			})

		const book = results[0]

		const sql = `SELECT * FROM reviews WHERE book_id = ?`

		connection.query(sql, [id], (err, results) => {
			if (err) return res.status(500).json({ message: err.message })

			book.reviews = results
			// BONUS: aggiungere il voto medio delle recensioni
			res.json(book)
		})
	})
}

module.exports = { index, show }
