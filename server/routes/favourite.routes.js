const {Router} = require('express')
const { addToFav, getFav, removeFav } = require('../controller/favourite.controller')

favouriteRoutes = Router()

favouriteRoutes.post('/add',addToFav)
favouriteRoutes.get('/',getFav)
favouriteRoutes.delete('/remove', removeFav)


module.exports={favouriteRoutes} 