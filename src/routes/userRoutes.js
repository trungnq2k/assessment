const { Router } = require('express')
const { postUser } = require('../controllers/user.js')
const { logger } =  require('../middlewares/logger.js')

const router = Router()

router.post('/', logger, postUser)


module.exports = { userRouter:router }
