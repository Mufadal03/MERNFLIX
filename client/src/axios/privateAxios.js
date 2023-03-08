import axios from 'axios'

const privateAxios = axios.create({
    baseURL:"http://localhost:8080"
})

privateAxios.interceptors.request.use((configs) => {
    return {
        ...configs,
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'passToken'
        }
    }
})

privateAxios.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (err) => {
        throw err.response.data  
})





export default privateAxios