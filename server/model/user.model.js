const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: { type: String, required: true ,unique:true},
    password: { type: String, required: true },
    username:{type:String,required:true},
    profilePic: { type: String },
})  

const userModel = mongoose.model('user',userSchema)

module.exports={userModel}