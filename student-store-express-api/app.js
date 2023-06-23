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
app.post('/store', (req, res ) => {

    console.log(req.body.names);
    res.send(req.body.names[0])
})

app.post('/checkout', (req, res) => {
    const cart = req.body;
  
    for (let item of cart) {
      const product = db.products.find(prod => prod.id === item.productId);
      if (!product) {
        res.status(400).send({ error: `Product with id ${item.productId} not found.` });
        return;
      }
    }
  
   
    res.send({ message: 'Order processed successfully.' });
  });
  

module.exports = app;