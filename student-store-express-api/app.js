const db = require('./data/db.json')
const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200);
    res.send(db)
})

app.post('/', (req, res) => {
    res.send('success')
})

module.exports = app;