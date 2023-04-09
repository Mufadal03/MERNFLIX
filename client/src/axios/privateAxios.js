import axios from 'axios'

const privateAxios = axios.create({
    baseURL:"https://mernflix-two.vercel.app"
})

privateAxios.interceptors.request.use((configs) => {
    return {
        ...configs,
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${(document.cookie).split('=')[1]}`
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