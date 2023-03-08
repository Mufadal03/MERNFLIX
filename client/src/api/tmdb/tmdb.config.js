const mediaType = {
    movie: 'movie',
    tv :'tv'
}

const mediaCategory = {
    popular: 'popular',
    top_rated:'top_rated'
}

const backdropImgUrl = (iImgPath) => `https://image.tmdb.org/t/p/original${iImgPath}`

const posterImgUrl = (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`

const youtubeUrl = (videoId) => `https://www.youtube.com/embed/${videoId}?controls=0`


const tmdbConfig = {
    mediaCategory,
    mediaType,
    backdropImgUrl,
    posterImgUrl,
    youtubeUrl
}
export default tmdbConfig