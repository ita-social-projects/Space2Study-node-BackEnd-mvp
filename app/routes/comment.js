const router = require('express').Router({ mergeParams: true })

const commentController = require('~/app/controllers/comment')
const asyncWrapper = require('~/app/middlewares/asyncWrapper')
const { authMiddleware } = require('~/app/middlewares/auth')
const isEntityValid = require('~/app/middlewares/entityValidation')

const Cooperation = require('~/app/models/cooperation')

const params = [{ model: Cooperation, idName: 'id' }]

router.use(authMiddleware)

router.get('/', isEntityValid({ params }), asyncWrapper(commentController.getComments))
router.post('/', isEntityValid({ params }), asyncWrapper(commentController.addComment))

module.exports = router
