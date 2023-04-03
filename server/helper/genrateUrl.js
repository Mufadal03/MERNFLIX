const { tmdbApi } = require("../tmdb/tmdb.api")
const {movieGenres,tvGenres} = require('./genreDb')
const genrate_hero_url = (genre, mediaType) => {
    if (!genre) return tmdbApi.trendingList({mediaType,timeWindow:'day',page:1})
    if (genre === 'trending') return tmdbApi.trendingList({ mediaType, timeWindow: 'day', page: 1 })
    if (genre === 'top_rated' || genre === 'popular') return tmdbApi.mediaList({mediaType,mediaCategory:genre,page:1})
    
    const genreCollection = mediaType === 'tv' ? tvGenres : movieGenres
    const singleGenre = genreCollection.find(el => el.id === +genre)
    return tmdbApi.mediaByGenre({mediaType,with_genres:singleGenre.id,page:1})
}                     

module.exports = { genrate_hero_url }