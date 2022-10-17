const { Router } = require('express')
const { bookRouter } = require('./bookRoutes')
const { seedRouter } = require('./seedRoutes')
const router = Router()

router.use('/books', bookRouter)
router.use('/seed', seedRouter)

module.exports = {
  router    
};

// export { router }
