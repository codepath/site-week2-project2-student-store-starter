const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('tiny'));

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

const purchasesRouter = require('./routes/purchases');
app.use('/purchases', purchasesRouter);
app.use('/purchases/:id', purchasesRouter);

app.get('/', (req, res) => {
  res.status(200).json({ ping: 'pong' });
});

module.exports = app;