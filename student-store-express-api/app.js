// YOUR CODE HERE
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./data/db.json')

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).send(db.products)
})

module.exports = app