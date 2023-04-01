const { Router } = require('express')
const { postReview, getReviews } = require('../controller/review.controller')

reviewRoutes = Router()

reviewRoutes.post('/create', postReview)
reviewRoutes.get('/',getReviews)

module.exports={reviewRoutes}


