const { tmdbApi } = require("../tmdb/tmdb.api")

const personDetail = async (req, res) => {
    const { personId } = req.params
    try {
        const data = await tmdbApi.personDetail({ personId })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const personMedia = async (req, res) => {
    const { personId } = req.params 
    try {
        const data = await tmdbApi.personMedia({ personId })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports={personDetail,personMedia}