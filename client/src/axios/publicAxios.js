import axios from 'axios'

const publicAxios = axios.create({
    baseURL: 'http://localhost:8080',
})


publicAxios.interceptors.response.use((response) => {
    if (response && response.data) return response.data 
    return response
}, (error) => {
    throw error.response.data
})

export default publicAxios