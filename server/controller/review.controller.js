const { reviewModel } = require("../model/review.model")

const postReview = async (req, res) => {
    const {userId,mediaId,mediaType,comment} = req.body
    try {
        const review =reviewModel({ author: userId, mediaId, mediaType, comment })
        await review.save()
        res.status(200).send({response:'Review added',success:true})
    } catch (error) {
        res.status(400).send({response:error.message,success:false})
    }
}

const getReviews = (req, res) => {
    
}

module.exports={postReview,getReviews}