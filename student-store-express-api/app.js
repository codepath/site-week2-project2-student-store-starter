const express = require('express')
const cors = require('cors')

const db = require('./data/db.json')

const app = express()
// const fs = require('fs')

app.use(cors())

app.get('/', (req,res) => {
    res.status(200)
    res.send(db)
})


module.exports = app