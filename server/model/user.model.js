const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true },
    username:{type:String,required:true},
    profilePic: { type: String },
},{ timestamps: true, versionKey: false, })  

const userModel = mongoose.model('user',userSchema)

module.exports={userModel}