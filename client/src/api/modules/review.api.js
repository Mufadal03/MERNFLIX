import privateAxios from "../../axios/privateAxios"
import publicAxios from "../../axios/publicAxios"

const reviewEndpoints = {
    post: '/review/create',
    get:'/review'
}

export const reviewApi = {
    postReview: async (payload) => {
        try {
            const response = privateAxios.post(reviewEndpoints.post, payload)
            return response
        } catch (error) {
            const{response} = error
            throw new Error(response)
        }
    },
    getReviews: async ({mediaType,mediaId}) => {
        try {
            const response = publicAxios.get(`${reviewEndpoints.get}?mediaType=${mediaType}&mediaId=${mediaId}`)
            return response
        } catch (error) {
            const { response } = error
            throw new Error(response)
        }
    }
}