import publicAxios from "../../axios/publicAxios"

const mediaEndpoints = {
    List: ({ mediaType, mediaCategory, page }) => `/media/${mediaType}/${mediaCategory}?page=${page}`,

    detail: ({ mediaType, mediaId }) => `media/detail/${mediaType}/${mediaId}`,

    search: ({ type, query, page }) => `media/find/?type=${type}&query=${query}&page=${page}`,

    getGenre: ({ type }) => `media/genre?type=${type}`,

    getTrendingList: ({ mediaType, timeWindow,page=1 }) => `/media/trending/${mediaType}/${timeWindow}?page=${page}`,

    getMediaByGenre:({mediaType,genreId})=>`/media/discover/${mediaType}?with_genres=${genreId}`
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

    getSearch: async ({ type, query, page }) => {
        try {
            const response = await publicAxios.get(mediaEndpoints.search({ type, query, page }))
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

    getMediaByGenre: async ({ mediaType, genreId }) => {
        try {
            const response = await publicAxios.get(mediaEndpoints.getMediaByGenre({ mediaType, genreId }))
            return response
        } catch (error) {
            return error
        }
    }
}

export default mediaApi