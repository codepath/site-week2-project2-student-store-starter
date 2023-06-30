const express = require("express");
const { findAll } = require("../models/store");
const Router = express.Router();
const { findOne } = require("../models/store");

// Router.get("/" (req, res, next))({
//     //type of route - Get
//     //Get request for all products
//    const products = findAll()
//    res.status(200).json({products})

// })

//getting all products
Router.get("/", async (req, res) => {
  const products = findAll();
  res.status(200).json({ products });
});

//getting one product
Router.get("/:productId", async (req, res) => {
  const productId = req.params.productId; // taking in a parameter
  const productDetails = findOne(productId); //calling the findOne function
  res.status(200).json({ productDetails });
});

module.exports = Router;
