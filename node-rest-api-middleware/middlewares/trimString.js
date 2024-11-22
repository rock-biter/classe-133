function trimString(req, res, next) {
	if (req.body && typeof req.body === 'object') {
		for (const key in req.body) {
			const value = req.body[key]

			if (typeof value === 'string') {
				req.body[key] = value.trim()
			}
		}
	}

	console.log('body trimmato', req.body)

	next()
}

module.exports = trimString
