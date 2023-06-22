const express = require("express");
const { store } = require("../models/store"); // store model for updating db
const storeRouter = express.Router(); // router for store related requests


// STORE ROUTES

// GET
storeRouter.get("/", (request, response) => {
    // Responds to GET requests to /store with an 
    // array of all products in the store in the format 
    // const products = store.getAllProducts();
    const products = store.getAllProducts();
    console.log("Retrieving products...");
    response.status(201).json({"products": products})
})
storeRouter.get("/:id", (request, response) => {
    const product = store.getProductByID(request.params.id);
    response.status(201).json({"product": product});
    // response.status(201).send(`Product ID: ${request.params.id}`)
    // response with a single product 
    // based on the product's ID 
    // in the format: { "product": product }
})

// POST
storeRouter.post("/", (request, response) => {
    const purchase = request.body;
    try {
        store.addPurchase(purchase);
    } catch{

    }
    response.send(purchase);
    // handle purchases
})


// PRODUCTS ROUTES


module.exports = storeRouter;