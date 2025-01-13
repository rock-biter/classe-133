const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')

// index
router.get('/', bookController.index)

// show
router.get('/:id', bookController.show)

//api/books/:id/reviews
router.post('/:id/reviews', bookController.storeReview)

module.exports = router
