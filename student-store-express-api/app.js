// YOUR CODE HERE
const express = require('express')
const cors = require('cors')
const db = require("./data/db.json")

let products = [...db.products];


const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200)
    res.send(db)
    
})

app.get('/products/:id', (req,res) => {
    res.status(200)
    res.send(products.filter(product => parseInt(product.id) === parseInt(req.params.id)))
})

module.exports = app