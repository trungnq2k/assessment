const { Router } = require('express')
const { bookRouter } = require('./bookRoutes')
const { seedRouter } = require('./seedRoutes')
const { userRouter } = require('./userRoutes')
const { authorRouter } = require('./authorRoutes')

const router = Router()

router.use('/books', bookRouter)
router.use('/seed', seedRouter)
router.use('/users', userRouter)
router.use('/authors', authorRouter)

module.exports = {
  router    
};

// export { router }
