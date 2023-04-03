const { Router } = require('express')
const { postReview, getReviews } = require('../controller/review.controller')
const { authenticator } = require('../middleware/authenticator')

reviewRoutes = Router()

reviewRoutes.post('/create', authenticator, postReview)
reviewRoutes.get('/',getReviews)

module.exports={reviewRoutes}


