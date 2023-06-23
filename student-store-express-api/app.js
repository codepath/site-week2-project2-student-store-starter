const express = require('express')
const app = express()
// const fs = require('fs')
// const path = require('path')
const cors = require('cors')
const db = require('./data/db.json')

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=> {
    res.status(200);
    res.send(db)
})

app.get('/store',(req,res)=> {
    res.status(200);
    res.send(db)
})

app.get('/store/:id',(req,res)=> {
    const {id} = req.params;
    
    let myProduct = db.products.filter(prod => prod.id === parseInt(id));
    myProduct ? myProduct = myProduct[0] : res.send("No products found.") 
    
    res.status(200);
    res.send({"product": myProduct})
})

app.post('/store', (req,res) => {
 // 1. When a user clicks check out, then run function that calls this endpoint (axios.post)
 // 2. This function (app.post) should receive req.body data (shopping cart)
 // 3. Function needs to calculate total price
 // 4. 
    console.log(req.body.names);
    res.send(req.body.names[0])
})


module.exports = app;
