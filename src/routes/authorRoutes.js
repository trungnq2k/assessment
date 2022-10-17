const { Router } = require('express')
const { getAllAuthors } = require('../controllers/author.js')
const { logger } =  require('../middlewares/logger.js')

const router = Router()

router.get('/', logger, getAllAuthors)


module.exports = { authorRouter:router }
