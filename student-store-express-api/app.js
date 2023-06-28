// YOUR CODE HERE
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.use(express.json());

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

const purchasesRouter = require('./routes/purchases');
app.use('/purchases', purchasesRouter);
app.use('/purchases/:id', purchasesRouter);

app.get('/', (req, res) => {
  res.status(200).json({ ping: 'pong' });
});

module.exports = app;