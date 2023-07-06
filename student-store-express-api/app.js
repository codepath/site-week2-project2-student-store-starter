// YOUR CODE HERE
const express = require("express")
const app = express();
const cors = require("cors");

const fs = require("fs");
const path = require("path")
const db = require("./data/db")

let products = [...db.products];

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200);
    res.send(db); 
});

// app.post("/", (req, res) => {
//     res.send("success")
// })
app.get("/products/:id", (req, res) => {
    res.status(200);
    res.send(products.filter(product => parseInt(product.id) === parseInt(req.params.id))); 
});


module.exports = app;