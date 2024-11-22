const express = require('express')
const router = express.Router()
const userController = require('../controllers/usercontroller.js')

// CRUD sulla risorsa users
// index
router.get('/', userController.index)

// show
router.get('/:id', userController.show)

// store
router.post('/', userController.store)

// update
router.put('/:id', userController.update)

// modify
router.patch('/:id', userController.modify)

// destroy
router.delete('/:id', userController.destroy)

module.exports = router
