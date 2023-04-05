const { favouriteModel } = require("../model/favourite.model")

const addToFav = async(req,res) => {
    const { data, userId } = req.body
    const isExist = await favouriteModel.findOne({ id: data.id })
    if(isExist)return res.status(200).send({response:"Added to favourite",success:true})
    try {
        const fav = new favouriteModel({ userId, ...data })  
        await fav.save()
        res.status(200).send({response:'Added to favourite',success:true})
    } catch (error) { 
        res.status(400).send({response:error.message,success:false})
    }
}

const getFav = async (req, res) => {
    const { userId} = req.body 
    
    try {
        const data = await favouriteModel.find({ userId }).sort("-createdAt");
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({response:error.message,success:true})
    }
}

const removeFav = async (req, res) => {
    const { userId } = req.body 
    const { mediaId } = req.query
    try {
         await favouriteModel.deleteOne({userId, id: mediaId })
        res.status(200).send({response:'media removed from favourite',success:true})
    } catch (error) {
        res.status(400).send({response:error.message,success:false})
    }
}
module.exports={addToFav,getFav,removeFav}