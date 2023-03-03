const axios = require('axios')

const getReq = async (url) => {
    try {
        return {data} = await axios.get(url)
    } catch (error) {
      throw new Error('Got error while fetching')
    }
}
module.exports=getReq