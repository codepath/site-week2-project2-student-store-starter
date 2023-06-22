const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const storeRouter = require('./routes/store')

const app = express()

app.use(cors())
app.use(`/store`, storeRouter)
app.use(morgan('tiny'))

module.exports = app