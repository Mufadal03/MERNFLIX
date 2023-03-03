const express = require('express')
const app = express()
const cors = require('cors')
const {connection} =  require('./config/db')
const { mediaController } = require('./routes/media.routes')
require('dotenv').config()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

app.use('/media',mediaController)

app.listen(PORT, async () => {
    try {
        await connection
        console.log('Running on http://localhost:8080')
    } catch (error) {
        console.log('got error while connecting',error)
    }
}) 
