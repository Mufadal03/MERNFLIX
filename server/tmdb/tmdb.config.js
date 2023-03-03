require('dotenv').config()
const base_url = process.env.TMDB_BASE_URL
const api_key = process.env.TMDB_API_KEY

const generate_url = (endpoints,params) => {
    const query = new URLSearchParams(params)
    return `${base_url}${endpoints}?api_key${api_key}${query}`
}

module.exports={generate_url}