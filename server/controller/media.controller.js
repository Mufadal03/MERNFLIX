const { genrate_hero_url } = require('../helper/genrateUrl')
const { tvGenres, movieGenres } = require('../helper/genreDb')
const { reviewModel } = require('../model/review.model')
const { tmdbApi } = require('../tmdb/tmdb.api')

const getHero = async (req, res) => {
    let { mediaType, genre  } = req.query
    const medias = ['tv', 'movie']
    const customMediaType = medias[Math.floor(Math.random() * 2)]
    try {
        const type = mediaType?mediaType :customMediaType
        const url = genrate_hero_url(genre, type)
        const medias = await url
        const index = Math.floor(Math.random() * 8)
        const heroMedia = medias.results[index]
        const { id, backdrop_path, genre_ids, overview, title, poster_path, name } = heroMedia 
        const videos = await tmdbApi.mediaVideos({mediaType:type,mediaId:id})
        const genreCollection = type === 'tv' ? tvGenres : movieGenres
        const genre_array = genre_ids.map(el => checkGenre(el, genreCollection))
        const response = {
            id,
            backdrop:backdrop_path,
            genres: genre_array,
            description:overview,
            title: title || name,
            poster:poster_path,
            video: videos.results,
            mediaType:type
        }
        //   tagline:hero.tagline,
        res.status(200).send({ response, success: true })
    } catch (error) {
        res.status(400).send({error:error.message,success:false})
    }
}


const getList = async (req, res) => {
    try {
        const { page = 1 } = req.query
        const { mediaType, mediaCategory } = req.params
        const payload = { mediaType, mediaCategory, page }
        const data = await tmdbApi.mediaList(payload)
        res.status(200).send(data)
    } catch (e) {
        res.status(400).send({
            error: true,
            message: e.message
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
        media.images = await tmdbApi.mediaImages(payload)
        media.watchProvider = await tmdbApi.mediaWatchProvider(payload)

        res.status(200).send(media)
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, message: error })
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

const getTrendingList = async (req, res) => {
    const { mediaType, timeWindow } = req.params
    const { page = 1 } = req.query
    const payload = { mediaType, timeWindow, page }
    try {
        const data = await tmdbApi.trendingList(payload)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ response: error })
    }
}

const getMediaByGenre = async (req, res) => {
    const { mediaType } = req.params
    const { with_genres, page } = req.query
    try {
        const data = await tmdbApi.mediaByGenre({ mediaType, with_genres, page })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getSearch = async (req, res) => {
    const { mediaType } = req.params
    const { query, page } = req.query
    try {
        const data = await tmdbApi.mediaSearch({ mediaType, query, page })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const checkGenre = (el,db) => {
    return db.find((item)=>item.id===el)
}
module.exports = { getList, getDetail, getSearch, getGenre, getTrendingList, getMediaByGenre, getHero }           