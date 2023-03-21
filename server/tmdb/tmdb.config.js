require('dotenv').config()
const api_key = process.env.TMDB_API_KEY

const generate_url = (endpoints, params) => {
    const qs = new URLSearchParams(params)
    return `https://api.themoviedb.org/3/${endpoints}?api_key=${api_key}&${qs}`
}

module.exports={generate_url}