const { Router } = require('express')
const { bookRouter } = require('./bookRoutes')
const { seedRouter } = require('./seedRoutes')
const { userRouter } = require('./userRoutes')

const router = Router()

router.use('/books', bookRouter)
router.use('/seed', seedRouter)
router.use('/user', userRouter)

module.exports = {
  router    
};

// export { router }
