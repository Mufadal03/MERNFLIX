const usernameValidator = (req,res,next) => {
    const { username } = req.body 
    if (username.length <=4) res.status(400).send({ response: 'username minimum 5 characters', error: false })
    else next()
}

module.exports={usernameValidator}