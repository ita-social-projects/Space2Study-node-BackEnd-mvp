const router = require('express').Router()

const auth = require('~/app/routes/auth')
const user = require('~/app/routes/user')
const email = require('~/app/routes/email')
const review = require('~/app/routes/review')
const subject = require('~/app/routes/subject')
const adminInvitation = require('~/app/routes/adminInvitation')
const question = require('~/app/routes/question')
const resourcesCategory = require('~/app/routes/resourcesCategory')

router.use('/auth', auth)
router.use('/users', user)
router.use('/send-email', email)
router.use('/reviews', review)
router.use('/subjects', subject)
router.use('/admin-invitations', adminInvitation)
router.use('/questions', question)
router.use('/resources-categories', resourcesCategory)

module.exports = router
