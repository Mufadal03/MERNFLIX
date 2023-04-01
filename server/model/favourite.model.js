const mongoose = require('mongoose')

const favouriteSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    release_date: {
        type:String
    },
    poster_path: {
        type: String,
        require:true
    },
    genre_ids: {
        type: [Number]
    },
    first_air_date: {
        type:String 
    },
    id: {
        type:Number
    },
    title: {
        type:String
    }

}, { timestamps: true, versionKey: false, })

const favouriteModel = mongoose.model('favourite', favouriteSchema)

module.exports={favouriteModel}