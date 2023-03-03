const { Router } = require('express')
const { getList, getDetail, getSearch, getGenre} = require('../controller/media.contorller')
mediaController = Router()

mediaController.get('/:mediaType/:mediaCategory',getList)

mediaController.get('/detail/:mediaType/:mediaId', getDetail)

mediaController.get('/find', getSearch)

mediaController.get('/genre',getGenre)

module.exports={mediaController}