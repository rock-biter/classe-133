function checkTime(req, res, next) {
	console.log('Middleware check time')

	const hours = new Date().getHours()
	console.log(hours)

	if (hours < 12 || hours > 16) {
		res.send('Non puoi accedere in questa fascia oraria.')
		return
	}

	next()
}

module.exports = checkTime
