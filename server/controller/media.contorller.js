const { reviewModel } = require('../model/review.model')
const { tmdbApi } = require('../tmdb/tmdb.api')

const getList = async(req, res) => {
    try {
        const { page=1 } = req.query 
        const { mediaType, mediaCategory } = req.params 
        const payload = { mediaType, mediaCategory, page }
        const data = await tmdbApi.mediaList(payload)
        res.status(200).send(data)
    }catch(e){
        res.status(400).send({
            error: true,
            message : e.message
        })
    }
}    
 
const getDetail = async (req, res) => {
    const { mediaType, mediaId } = req.params
    const payload = { mediaType, mediaId }
   
   try {
       const media = await tmdbApi.mediaDetail(payload)
       media.video = await tmdbApi.mediaVideos(payload)
       media.credits = await tmdbApi.mediaCredits(payload)
       const recommendations = await tmdbApi.mediaRecommendations(payload)
       media.recommendation = recommendations.results
       const similar = await tmdbApi.similarMedia(payload)
       media.similar = similar.results
       media.images = await tmdbApi.mediaImages(payload)
       media.watchProvider = await tmdbApi.mediaWatchProvider(payload)
       media.reviews = await reviewModel.find({mediaId,mediaType}).populate('author')
       res.status(200).send(media)
   } catch (error) {
       console.log(error)
    res.status(400).send({success:false,message:error})
   }
}

const getGenre = async (req, res) => {
    const { type } = req.query
    const payload = { mediaType: type }
    try {
        const data = await tmdbApi.mediaGenres(payload)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getTrendingList = async(req, res) => {
    const { mediaType, timeWindow } = req.params 
    const {page=1} = req.query
    const payload = { mediaType, timeWindow ,page}
    try {
        const data = await tmdbApi.trendingList(payload)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({response:error})
    }
}

const getMediaByGenre = async(req, res) => {
    const { mediaType } = req.params 
    const { with_genres ,page} = req.query 
    try {
        const data = await tmdbApi.medaiByGenre({ mediaType, with_genres,page })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getSearch = async (req, res) => {
    const { mediaType } = req.params 
    const {query,page} = req.query 
    try {
        const data = await tmdbApi.mediaSearch({ mediaType, query, page })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports={getList,getDetail,getSearch,getGenre,getTrendingList,getMediaByGenre}           