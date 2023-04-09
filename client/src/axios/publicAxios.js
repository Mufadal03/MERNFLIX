import axios from 'axios'

const publicAxios = axios.create({
    baseURL: 'https://mernflix-two.vercel.app',
    
})


publicAxios.interceptors.response.use((response) => {
    if (response && response.data) return response.data 
    return response
}, (error) => {
    throw error.response.data
})

export default publicAxios