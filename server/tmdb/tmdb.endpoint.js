const { generate_url } = require("./tmdb.config");

const tmdbEndpoints = {
    // TO GET TRENDING , TOP-RATED , MOST POPULAR MOVIE/TV
    mediaList: ({ mediaType, mediaCategory, page }) => generate_url(`${mediaType}/${mediaCategory}`, { page }),

    // GET DETAILS OF SINGLE MOVIE/TV
    mediaDetail: ({ mediaType, mediaId }) => generate_url(`${mediaType}/${mediaId}`),

    //GET ALL AVAILABLE GENRE WE HAVE FOR TV/MOVIE
    mediaGenres: ({ mediaType }) => generate_url(`genre/${mediaType}/list`),

    //GET DETAILS OF CASTS AND CREW MEMBERS
    mediaCredits: ({ mediaType, mediaId }) => generate_url(`${mediaType}/${mediaId}/credits`),
 
    //VIDEO
    mediaVideos: ({ mediaType, mediaId }) => generate_url(`${mediaType}/${mediaId}/videos`),

    // GET RECOMMENDATION
    mediaRecommend: ({ mediaType, mediaId }) => generate_url(`${mediaType}/${mediaId}/recommendations`),

    // GET IMAGES
    mediaImages: ({ mediaType, mediaId }) => generate_url(`${mediaType}/${mediaId}/images`),

    // SEARCH
    mediaSearch: ({ mediaType, query, page }) => generate_url(`search/${mediaType}`, { query, page }),

    //PERSON DETAIL
    personDetail: ({ personId }) => generate_url(`person/${personId}`),

    // MEDIAS OF THE PERSON
    personMedias: ({ personId }) => generate_url(`person/${personId}/combined_credits`),

    // PLATFROM WHERE WE CAN WATCH
    mediaWatchProvider: ({ mediaType, mediaId }) => generate_url(`${mediaType}/${mediaId}/watch/providers`),
    
    // TRENDING 
    trendingList:({mediaType,timeWindow,page})=>generate_url(`/trending/${mediaType}/${timeWindow}`,{page}),

    //GET SPECIFIC GENRE TYPE MEDIA EG:TV/ACTION MOVIE/FANTASY 
    mediaByGenre: ({ mediaType, with_genres,page }) => generate_url(`discover/${mediaType}`, { with_genres ,page}),
   
    //YOU MAY ALSO LIKE
    similarMedia:({mediaType,mediaId})=>generate_url(`/${mediaType}/${mediaId}/similar`)
}

module.exports={tmdbEndpoints}