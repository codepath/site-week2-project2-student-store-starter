// YOUR CODE HERE
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./data/db.json')

app.use(cors())
app.use(express.json())

console.log(db)



app.get('/', (req, res) => {
    res.status(200)
    res.send(db)
})

module.exports = app