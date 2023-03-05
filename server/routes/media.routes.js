const { Router } = require('express')
const { getList, getDetail, getSearch, getGenre, getTrendingList, getMediaByGenre} = require('../controller/media.contorller')
mediaRoutes = Router()
mediaRoutes.get('/discover/:mediaType',getMediaByGenre)

mediaRoutes.get('/:mediaType/:mediaCategory',getList)

mediaRoutes.get('/detail/:mediaType/:mediaId', getDetail)

mediaRoutes.get('/find', getSearch)

mediaRoutes.get('/genre', getGenre)

mediaRoutes.get('/trending/:mediaType/:timeWindow', getTrendingList)


module.exports={mediaRoutes}