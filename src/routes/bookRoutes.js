const { Router } = require('express')
const { getBooks } = require('../controllers/books.js')
const { logger } =  require('../middlewares/logger.js')

const router = Router()

router.get('/', logger, getBooks)

// router.post('/facts', logger, insertFacts)

module.exports = { bookRouter:router }
