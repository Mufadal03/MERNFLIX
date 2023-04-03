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

const getReviews = async(req, res) => {
    const { mediaId, mediaType } = req.query 
    try {
        const reviews = await reviewModel.find({ mediaId, mediaType }).populate('author').sort("-createdAt")
        res.status(200).send({response:reviews,success:true})
    } catch (error) {
        res.status(400).send({response:error.message,success:false})
    }
}

module.exports={postReview,getReviews}