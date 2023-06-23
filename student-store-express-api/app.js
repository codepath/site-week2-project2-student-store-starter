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

app.post('/checkout', (req, res) => {
    const cart = req.body;
    let subtotal = 0;
    let taxesFees = 0;
    let total = 0;
    cart.forEach(item => {
      const product = db.products.find(p => p.id === item.id);
      if (product) {
        subtotal += (product.price * item.quantity);
    }
    taxesFees = subtotal * 0.0875;
    total = subtotal + taxesFees
    });
    console.log(req.body)
    res.send({total, taxesFees, subtotal});
});


module.exports = app;
