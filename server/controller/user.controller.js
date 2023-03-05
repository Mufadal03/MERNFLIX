const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { userModel } = require('../model/user.model')

const signUp = (req, res) => {
    const { email, profilePic = '', password, username } = req.body
    try {
        bcrypt.hash(password, 5, async(err, hash) => {
            if (err) {
               return res.status(400).send(err)
            }
            const user = new userModel({ email, profilePic, password: hash, username })
            await user.save()
            res.status(201).send({response:"User created"})
       })
    } catch (error) {
        res.status(500).send({response:'Internal server Error'})
    }
}

const signIn = async(req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if(!user)return res.status(401).send({response:'Please Signup'})
    const hashedPassword = user.password
    try {
        bcrypt.compare(password, hashedPassword, (err, result) => {
            if (err) return res.status(400).send({ response: 'Credentials are not matching' })
            if (result) {
                jwt.sign({ userId: user._id, userEmail: user.email }, process.env.JWT_SECRET, (err, token) => {
                    console.log(token) 
                    res.status(200).send({response:'SignIn Successfull',token})
                })
            }
        })
    } catch (error) {
        res.status(400).send({response:'OOPS Something went wrong'})
    }
}


module.exports={signUp,signIn}