const { Router } = require('express')
const { postSeed } = require('../controllers/seed.js')
const { logger } =  require('../middlewares/logger.js')

const router = Router()

router.post('/', logger, postSeed)


module.exports = { seedRouter:router }
