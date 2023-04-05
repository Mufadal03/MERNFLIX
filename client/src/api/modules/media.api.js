import publicAxios from "../../axios/publicAxios"

const mediaEndpoints = {
    List: ({ mediaType, mediaCategory, page }) => `/media/${mediaType}/${mediaCategory}?page=${page}`,

    detail: ({ mediaType, mediaId }) => `media/detail/${mediaType}/${mediaId}`,

    search: ({ mediaType, query, page }) => `media/search/${mediaType}?&query=${query}&page=${page}`,

    getGenre: ({ type }) => `media/genre?type=${type}`,

    getTrendingList: ({ mediaType, timeWindow,page=1 }) => `/media/trending/${mediaType}/${timeWindow}?page=${page}`,

    getMediaByGenre: ({ mediaType, genreId, page = 1 }) => `/media/discover/${mediaType}?with_genres=${genreId}&page=${page}`,

    getHero:({mediaType,genre})=>`/media/hero?mediaType=${mediaType}&genre=${genre}`
    
}

const mediaApi = {
    getList: async ({ mediaType, mediaCategory, page }) => {
        try {
            const response = await publicAxios.get(mediaEndpoints.List({ mediaType, mediaCategory, page }))
            return response
        } catch (error) {
            return error
        }
    },

    getDetail: async ({ mediaType, mediaId }) => {
        try {
            const response = await publicAxios.get(mediaEndpoints.detail({ mediaType, mediaId }))
            return response
        } catch (error) {
            return error
        }
    },

    getSearch: async ({ mediaType, query, page }) => {
        try {
            const response = await publicAxios.get(mediaEndpoints.search({ mediaType, query, page }))
            return response
        } catch (error) {
            return error
        }
    },

    getGenre: async ({ type }) => {
        try {
            const response = await publicAxios.get(mediaEndpoints.getGenre({ type }))
            return response
        } catch (error) {
            return error
        }
    },

    getTrendingList: async ({ mediaType, timeWindow,page }) => {
        try {
            const response = await publicAxios.get(mediaEndpoints.getTrendingList({ mediaType, timeWindow,page }))
            return response
        } catch (error) {
            return error
        }
    },

    getMediaByGenre: async ({ mediaType, genreId, page }) => {
        // console.log(mediaEndpoints.getMediaByGenre({ mediaType, genreId, page }))
        try {
            const response = await publicAxios.get(mediaEndpoints.getMediaByGenre({ mediaType, genreId,page }))
            return response
        } catch (error) {
            return error
        }
    },

    getHero: async ({ mediaType, genre }) => {
        try {
            console.log(mediaEndpoints.getHero({ mediaType, genre }))
            const response = await publicAxios.get(mediaEndpoints.getHero({ mediaType, genre }))
            return response
        } catch (error) {
            return error
        }
    }
}

export default mediaApi