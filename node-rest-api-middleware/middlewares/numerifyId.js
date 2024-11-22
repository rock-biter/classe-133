function numerifyId(req, res, next) {
	console.log('id:', req.params)

	if (req.params.id) {
		req.params.id = parseInt(req.params.id)
	}

	next()
}

module.exports = numerifyId
