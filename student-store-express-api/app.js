// YOUR CODE HERE

const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const db= require('./data/db.json')
const morgan= require('morgan')
// const storage= require('./data/storage')

app.use(cors()); //middleware;
app.use(express.json())
app.use(morgan('tiny')) //mainly debugging tool; logs requests to console

// let prodData= storage.get('products')

app.get("/store", (req, res) => {
  res.status(200);
  console.log(db.products[0])
  res.send(db); //can use sendFile and enter a path
});

app.get("/store/:id", (req,res) => {
    res.status(200)
    // try{
    //   let results= prodData.find((product) => product.id === req.params.id)
    //   console.log(results)
    // } catch (e){
    //   console.log(e)
    // }

    res.json(db.products.find((product) => product.id === parseInt(req.params.id))) //getting specific item
})
// console.log(db.purchases["user"])

app.post('/store', (req, res) => {
      // obtain information req.body.data
      // calculation of total, based on the quantity, price, and tax
      // create new json object 
    console.log(req.body)
    db.purchases.push(req.body)
    res.send(req.body) 
})

module.exports = app;
