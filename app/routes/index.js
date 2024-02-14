const router = require('express').Router()

const auth = require('~/app/routes/auth')
const user = require('~/app/routes/user')
const email = require('~/app/routes/email')
const location = require('~/app/routes/location')
const adminInvitation = require('~/app/routes/adminInvitation')
const category = require('~/app/routes/category')
const question = require('~/app/routes/question')
const resourcesCategory = require('~/app/routes/resourcesCategory')

router.use('/auth', auth)
router.use('/users', user)
router.use('/send-email', email)
router.use('/location', location)
router.use('/admin-invitations', adminInvitation)
router.use('/categories', category)
router.use('/questions', question)
router.use('/resources-categories', resourcesCategory)

module.exports = router
