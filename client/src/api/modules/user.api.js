import privateAxios from "../../axios/privateAxios"
import publicAxios from "../../axios/publicAxios"

const userEndpoints = {
    login: '/user/signIn',
    singup: '/user/signup',
    getInfo: '/user/info',
    logout :'/user/logout'
}

export const userApi = {
    login: async (payload) => {
        try {
            const response = await publicAxios.post('/user/signIn', payload, { withCredentials: true })
            return response
        } catch (error) {
            const { response } = error
            throw new Error(response) 
        }
    },
    signup: async (payload) => {
        try {
            const response = await publicAxios.post(userEndpoints.singup, payload)
            return response
        } catch (error) {
            console.log(error)
            const{response} = error
            throw new Error(response) 
        }
    },
    info: async () => {
        try {
            const response = await privateAxios.get(userEndpoints.getInfo)
            return response
        } catch (error) {
            const { response } = error
            throw new Error(response) 
        }
    }
}

