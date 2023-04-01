const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'
    },
    comment: { type: String, required: true },
    mediaId: { type: String, required: true },
    mediaType:{type:String,enum:['tv','movie'],required:true}
}, { timestamps: {currentTime:()=>Date.now()}, versionKey: false, })

const reviewModel = mongoose.model('review', reviewSchema)

module.exports={reviewModel}