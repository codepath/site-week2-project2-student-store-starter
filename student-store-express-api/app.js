const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./data/db.json")
app.use(express.json())


let productData = [...db.products]
app.use(cors());

app.get('/store', (req, res) => {
    res.status(200);
    res.send(productData)
});

app.get('/store/:id', (req, res) => {
    console.log(req.params.id)
    let id = (typeof req.params.id !== 'number' ? parseInt(req.params.id) : req.params.id) 
    let filteredData = productData.filter((product) =>product.id === id)
    res.send(filteredData)
    res.status(200)
})

module.exports = app;