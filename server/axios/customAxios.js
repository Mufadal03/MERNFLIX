const axios = require('axios')

const getReq = async (url) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      return new Error(error.data)
    }
}
module.exports=getReq  