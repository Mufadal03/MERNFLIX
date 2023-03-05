const {Router} = require('express')
const { signUp, signIn } = require('../controller/user.controller')

const userRoutes = Router()

userRoutes.post('/signup', signUp)
userRoutes.post('/signIn',signIn)

module.exports={userRoutes}