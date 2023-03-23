const { default: privateAxios } = require("../../axios/privateAxios")

const favouriteEndpoints = {
    add_to_fav: '/favourite/add',
    get_fav: '/favourite',
    remove_fav:'/favourite/remove'
}

export const favouriteApi = {
    addToFav: async (payload) => {
        try {
            const response = await privateAxios.post(favouriteEndpoints.add_to_fav, payload)
            return response
        } catch (error) {
            const { response } = error 
            throw new Error(response)
        }
    },
    getFav: async () => {
        try {
            const response = await privateAxios.get(favouriteEndpoints.get_fav)
            return response
        } catch (error) {
            const { response } = error
            throw new Error(response)
        }
    },
    removeFav: async (id) => {
        try {
            const response = await privateAxios.delete(favouriteEndpoints.remove_fav, {
                params: {
                    mediaId:id
                }
            })
            return response
        } catch (error) {
            const { response } = error
            throw new Error(response)
        }
    }
}

