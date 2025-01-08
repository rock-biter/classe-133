function errorsHandler(err, _, res) {
	res.status(500).json({
		message: err.message,
	})
}

module.exports = errorsHandler
