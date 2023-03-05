const express = require('express')
const app = express()
const cors = require('cors')
const {connection} =  require('./config/db')
const { mediaRoutes } = require('./routes/media.routes')
const { personRoutes } = require('./routes/person.routes')
const { userRoutes } = require('./routes/user.routes')
require('dotenv').config()
app.use(cors())
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
