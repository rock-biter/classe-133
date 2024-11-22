const express = require('express')
const router = express.Router()
const pizzaController = require('../controllers/pizzaController.js')
const checkTime = require('../middlewares/checkTime.js')
const numerifyId = require('../middlewares/numerifyId.js')
const pizzas = require('../data/pizzas.js')

// CRUD sulla risorsa pizza
// PREFIX /pizzas
// index /pizzas/
// router.use(checkTime)
// router.use('/:id', checkTime)

router.param('id', (req, res, next, id) => {
	console.log('param id:', id)

	// req.params.id =

	const pizza = pizzas.find((pizza) => pizza.id === parseInt(id))

	if (pizza) {
		req.pizza = pizza
		next()
	} else {
		res.status(404)
		res.json({
			from: 'middleware param',
			error: 'Pizza not found',
			message: 'La pizza non è stata trovata.',
		})
	}
})

router.get('/', pizzaController.index)

// show /pizzas/:id
router.get('/:id', pizzaController.show)

// store /pizzas/
router.post('/', pizzaController.store)

// update /pizzas/:id
router.put('/:id', pizzaController.update)

// modify /pizzas/:id
router.patch('/:id', pizzaController.modify)

// destroy /pizzas/:id
// router.delete('/:id', checkTime, pizzaController.destroy)
router.delete('/:id', pizzaController.destroy)

module.exports = router
