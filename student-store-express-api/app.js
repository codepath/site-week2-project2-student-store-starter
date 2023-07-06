// YOUR CODE HERE
const express = require("express");
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require("path");

const db = require('./data/db.json');

app.use(cors());
app.use(express.json());

// console.log(db);

app.get('/', (req,res) =>{
    res.status(200);
    res.send(db);
})


app.get('/store', (req,res) =>{
    res.status(200);
    res.send(db);
})


app.get('/store/products/:id', (req,res) =>{
    // let filteredData = productData.
    const {id} = req.params;

    let myProduct = db.products.filter(product => product.id === parseInt(id));
    
    myProduct ? myProduct = myProduct[0] : res.send("No products found.")

    res.status(200);
    res.send({"product" : myProduct})
})

module.exports = app;