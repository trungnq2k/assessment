const { Router } = require('express')
const { getBooks, patchRatings, getRatings } = require('../controllers/books.js')
const { logger } =  require('../middlewares/logger.js')

const router = Router()

router.get('/', logger, getBooks)
router.patch('/rating', logger, patchRatings)
router.get('/rating/:id', logger, getRatings)

module.exports = { bookRouter:router }
