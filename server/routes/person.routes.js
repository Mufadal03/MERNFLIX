const { Router } = require('express')
const { personDetail, personMedia } = require('../controller/person.controller')
personRoutes = Router()


personRoutes.get('/:personId',personDetail)

personRoutes.get('/:personId/medias',personMedia)


module.exports={personRoutes}