const { Router } = require('express')
const { getList, getDetail, getSearch, getGenre, getTrendingList, getMediaByGenre, getHero} = require('../controller/media.controller')
mediaRoutes = Router()
mediaRoutes.get('/search/:mediaType', getSearch)

mediaRoutes.get('/discover/:mediaType',getMediaByGenre)

mediaRoutes.get('/:mediaType/:mediaCategory',getList)

mediaRoutes.get('/detail/:mediaType/:mediaId', getDetail)

mediaRoutes.get('/genre', getGenre)

mediaRoutes.get('/trending/:mediaType/:timeWindow', getTrendingList)

mediaRoutes.get('/hero',getHero)

module.exports={mediaRoutes}