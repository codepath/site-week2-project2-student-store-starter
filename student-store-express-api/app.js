// YOUR CODE HERE

const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const db = require('./data/db.json')
const morgan= require('morgan')

app.use(cors()); //middleware;
app.use(express.json())
app.use(morgan('tiny')) //mainly debugging tool; logs requests to console


app.get("/store", (req, res) => {
  res.status(200);
  console.log(db.products[0])
  res.send(db); //can use sendFile and enter a path
});

app.get("/store/:id", (req,res) => {
    res.status(200)

    res.json(db.products.find((product) => product.id === parseInt(req.params.id))) //getting specific item
})

app.post('/store', (req, res) => {
    db.purchases.push(req.body)
    console.log(db);
    fs.writeFileSync('./data/db.json', JSON.stringify(db, null, 2));
    res.send(req.body) 
})

module.exports = app;
