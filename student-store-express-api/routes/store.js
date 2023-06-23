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
});
storeRouter.get("/purchases", (request, response) => {
    // Responds to GET requests to /store with an 
    // array of all products in the store in the format 
    const purchases = store.getAllPurchases();
    console.log("Retrieving purchases...");
    response.status(201).json({"purchases": purchases})
});
storeRouter.get("/purchases/:id", (request, response) => {
    // Responds to GET with purchase 
    // based on given purchase id 
    const purchase = store.getPurchasesByID(request.params.id);
    console.log("Retrieving purchases...");
    response.status(201).json({"purchase": purchase})
});
storeRouter.get("/:id", (request, response) => {
    const product = store.getProductByID(request.params.id);
    response.status(201).json({"product": product});
});



// POST
storeRouter.post("/", (request, response) => {
    const purchase = request.body;
    const newPurchase = store.addPurchase(purchase);
    response.send(newPurchase);
});


// PRODUCTS ROUTES
module.exports = storeRouter;