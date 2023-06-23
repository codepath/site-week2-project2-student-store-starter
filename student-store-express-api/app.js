// YOUR CODE HERE
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./data/db.json')
const morgan = require ('morgan');



app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())

app.get('/', (req,res) => {
    res.status(202);
    res.send(db)
})

app.get('/store/:id',(req,res) =>{
    const {id} = req.params;

    let myProduct= db.products.filter(prod => prod.id === parseInt(id));
    myProduct ? myProduct = myProduct[0] : res.send("No products found.")

    res.status(200);
    res.send({"product" : myProduct})
})

  app.post('/checkout', (req, res) => {
    const cart = req.body; 
  
    let total = 0;
    let receiptItems = [];
  
    cart.forEach(item => {
      const product = db.products.find(p => p.id === item.productId);
      if (product) {
        total += product.price * item.quantity;
        receiptItems.push({ 
          name: product.name,
          price: product.price,
          quantity: item.quantity,
          productId: product.id
        });
      }
    });
    
    res.send({ total, receiptItems }); 
  });
  
  
  

module.exports = app;