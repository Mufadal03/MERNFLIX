const getReq = require("../axios/customAxios");
const { tmdbEndpoints } = require("./tmdb.endpoint");

const tmdbApi = {
    mediaList: async ({ mediaType, mediaCategory, page=1}) => await getReq(tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })),
    
    mediaDetail: async ({ mediaType, mediaId }) => await getReq(tmdbEndpoints.mediaDetail({ mediaType, mediaId })),
    
    mediaGenres: async ({ mediaType }) => await getReq(tmdbEndpoints.mediaGenres({ mediaType })),

    mediaCredits: async ({ mediaType, mediaId }) => await getReq(tmdbEndpoints.mediaCredits({ mediaType, mediaId })),
    
    mediaVideos: async ({ mediaType, mediaId }) => await getReq(tmdbEndpoints.mediaVideos({ mediaType, mediaId })),
    
    mediaImages: async ({ mediaType, mediaId }) => await getReq(tmdbEndpoints.mediaImages({ mediaType, mediaId })),
    
    mediaRecommendations: async ({ mediaType, mediaId }) => await getReq(tmdbEndpoints.mediaRecommend({ mediaType, mediaId })),
    
    mediaSearch: async ({ mediaType, query, page }) => await getReq(tmdbEndpoints.mediaSearch({ mediaType, query, page })),
    
    personDetail: async ({ personId }) => await getReq(tmdbEndpoints.personDetail({ personId })),
    
    personMedia: async ({ personId }) => await getReq(tmdbEndpoints.personMedias({ personId })),
    
    mediaWatchProvider: async ({ mediaType, mediaId }) => await getReq(tmdbEndpoints.mediaWatchProvider({ mediaType, mediaId })),

    trendingList: async({ mediaType, timeWindow }) =>await getReq(tmdbEndpoints.trendingList({mediaType,timeWindow}))
}

module.exports={tmdbApi}