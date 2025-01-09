const connection = require('../data/db')

function index(req, res) {
	// recuperiamo l'elenco dei books

	let sql = `SELECT books.*, AVG(vote) AS avg_vote 
		FROM books
		JOIN reviews
		ON books.id = reviews.book_id`

	// BONUS: aggiungere eventuali filtri
	if (req.query.search) {
		sql += ` WHERE title LIKE '%${req.query.search}%' OR author LIKE '%${req.query.search}%' OR abstract LIKE '%${req.query.search}%'`
	}

	sql += ` GROUP BY books.id`

	// BONUS: aggiungere paginazione
	// BONUS: aggiungere ordinamento

	connection.query(sql, (err, books) => {
		// console.log(err)
		if (err) return res.status(500).json({ message: err.message })

		// BONUS: se abbiamo l'elenco di libri recuperare la media delle valutazioni di ogni libro

		books.forEach((book) => {
			book.image = `${process.env.BE_HOST}/img/books/${book.image}`
		})

		res.json(books)
	})
}

function show(req, res) {
	// console.log(req.params.id)
	const id = req.params.id
	// if(isNaN(id))

	const sql = `SELECT books.*, AVG(vote) AS avg_vote 
		FROM books
		JOIN reviews
		ON books.id = reviews.book_id 
		WHERE books.id = ?
		GROUP BY books.id
		`

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
