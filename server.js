require('dotenv').config()
require('./config/database')
const express = require('express')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()
//=========MIDDLEWARE=========
app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))

//=========ROUTER=========
app.use('/api', require('./routes/api/toDo'))

//=========START SERVER=========
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})