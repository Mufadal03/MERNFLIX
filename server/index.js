const express = require('express')
const app = express()
const cors = require('cors')
const {connection} =  require('./config/db')
const { mediaRoutes } = require('./routes/media.routes')
const { personRoutes } = require('./routes/person.routes')
const { userRoutes } = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
require('dotenv').config()
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:3000" // for dev
    ],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
    exposedHeaders: ['*', 'Authorization']
}))
app.use(express.json())
const PORT = process.env.PORT || 8080

app.use('/media', mediaRoutes)
app.use('/person', personRoutes)
app.use('/user',userRoutes)

app.listen(PORT, async () => {
    try { 
        await connection
        console.log('Running on http://localhost:8080')
    } catch (error) {
        console.log('got error while connecting',error)
    }
}) 
