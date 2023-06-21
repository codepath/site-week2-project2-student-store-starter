// YOUR CODE HERE
const express = require('express')
const cors = require('cors')
const db = require("./data/db.json")


const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200)
    res.send(db)
})


module.exports = app