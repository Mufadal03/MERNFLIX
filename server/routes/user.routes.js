const {Router} = require('express')
const { signUp, signIn, userInfo} = require('../controller/user.controller')
const { authenticator } = require('../middleware/authenticator')
const { EmailValidator } = require('../middleware/email.validator')
const { PasswordValidator } = require('../middleware/password.validotar')
const { usernameValidator } = require('../middleware/username.validator')

const userRoutes = Router()

userRoutes.post('/signup',usernameValidator,EmailValidator,PasswordValidator, signUp)
userRoutes.post('/signIn',signIn)
userRoutes.get('/info', authenticator, userInfo)
module.exports={userRoutes}  