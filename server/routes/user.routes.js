const {Router} = require('express')
const { signUp, signIn, userInfo, logout } = require('../controller/user.controller')
const { authenticator } = require('../middleware/authenticator')

const userRoutes = Router()

userRoutes.post('/signup', signUp)
userRoutes.post('/signIn',signIn)
userRoutes.get('/info', authenticator, userInfo)
module.exports={userRoutes}