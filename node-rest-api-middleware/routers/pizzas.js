const express = require('express')
const router = express.Router()
const pizzaController = require('../controllers/pizzaController.js')
const checkTime = require('../middlewares/checkTime.js')
const numerifyId = require('../middlewares/numerifyId.js')

// CRUD sulla risorsa pizza
// PREFIX /pizzas
// index /pizzas/
// router.use(checkTime)
// router.use('/:id', checkTime)

router.get('/', pizzaController.index)

// show /pizzas/:id
router.get('/:id', numerifyId, pizzaController.show)

// store /pizzas/
router.post('/', pizzaController.store)

// update /pizzas/:id
router.put('/:id', numerifyId, pizzaController.update)

// modify /pizzas/:id
router.patch('/:id', numerifyId, pizzaController.modify)

// destroy /pizzas/:id
// router.delete('/:id', checkTime, pizzaController.destroy)
router.delete('/:id', numerifyId, pizzaController.destroy)

module.exports = router
