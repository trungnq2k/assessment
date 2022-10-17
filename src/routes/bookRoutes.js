const { Router } = require('express')
const { getBooks, patchRatings } = require('../controllers/books.js')
const { logger } =  require('../middlewares/logger.js')

const router = Router()

router.get('/', logger, getBooks)
router.patch('/rating', logger, patchRatings)

module.exports = { bookRouter:router }
