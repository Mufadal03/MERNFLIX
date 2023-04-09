const express = require('express')
const app = express()
const cors = require('cors')
const {connection} =  require('./config/db')
const { mediaRoutes } = require('./routes/media.routes')
const { personRoutes } = require('./routes/person.routes')
const { userRoutes } = require('./routes/user.routes')
const { favouriteRoutes } = require('./routes/favourite.routes')
const cookieParser = require('cookie-parser')
const { authenticator } = require('./middleware/authenticator')
const { reviewRoutes } = require('./routes/review.routes')
require('dotenv').config()
app.use(cookieParser());
app.use(cors(
    {
        origin: [
            "https://mern-flix.vercel.app/"
        ],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
        credentials: true,
        exposedHeaders: ['*', 'Authorization'],
        ['Access-Control-Allow-Origin']:'*'
    }
))
app.use(express.json())
const PORT = process.env.PORT || 8080

app.use('/media', mediaRoutes)
app.use('/person', personRoutes)
app.use('/user',userRoutes)
app.use('/favourite',authenticator, favouriteRoutes)
app.use('/review',reviewRoutes)

app.listen(PORT, async () => {
    try { 
        await connection
        console.log('Running on http://localhost:8080')
    } catch (error) {
        console.log('got error while connecting',error)
    }
}) 
