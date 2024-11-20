const express = require('express')
const router = express.Router()
const pizzaController = require('../controllers/pizzaController.js')

// CRUD sulla risorsa pizza
// PREFIX /pizzas
// index /pizzas/
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
router.delete('/:id', pizzaController.destroy)

module.exports = router
