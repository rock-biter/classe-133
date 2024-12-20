const mysql = require('mysql2')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'rockbiter',
	database: 'pizzeria',
})

connection.connect((err) => {
	// console.log(`error: ${err}`)
	if (err) throw err
	console.log(`Connessione riuscita`)
})

module.exports = connection
