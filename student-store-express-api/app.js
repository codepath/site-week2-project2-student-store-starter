const express = require("express");
const app = express();
const cors = require("cors");
const Store = require("./models/Store");
const db = require("./data/db.json");
const morgan = require("morgan");

const errorHandler = (error, request, response, next) => {
  // Error handling middleware functionality
  console.error(error.message); // log the error
  const status = error.statusCode || 500; // 500 because if no status code, the server is likely down
  // send back an easily understandable error message to the caller
  response.status(status).send(error.message);
  next(error);
};

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(morgan("tiny"));
const Buy = new Store(db); // buy is the name of my store

// GETs
app.get("/store", (req, res) => {
    res.status(200).send(Buy.getAllProducts());
});

app.get("/orders", (req, res) => {
    Buy.getAllOrders(res)
});

app.get("/orders/:id", (req, res) => {
    Buy.getOrderById(req.params.id, res)
})

app.get("/store/:productId", (req, res) => {
  try {
    res.status(201).send(Buy.fetchById(req.params.productId));
  } catch {
    res.status(404).send({ message: "Product does not exist", product: {} });
  }
});

// POSTs
app.post("/store", (req, res) => {
  try {
    res
      .status(201)
      .send({
        purchase: Buy.createOrder(req.body.shoppingCart, req.body.user),
      });
  } catch (error) {
    res.status(error.statusCode).send({ message: error.message });
  }
});

module.exports = app;
