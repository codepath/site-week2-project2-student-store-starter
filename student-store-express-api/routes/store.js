const express = require('express')
const router = express.Router();
const Store = require("../models/store")
const { NotFoundError, BadRequestError } = require("../utils/errors")

// get all products
router.get("/store", async (req, res, next) => {
    try {
        const products = Store.listProducts();
        res.status(200).json({ "products": products });
    } catch (error) {
        next(error);
    }
})

// get a single product
router.get("/store/:productId", async (req, res, next) => {
    try {
        const productId = (req.params.productId);
        const product = Store.fetchProductById(productId);
        res.status(200).json({ "product": product });
    } catch (error) {
        next(error);
    }
})

// post purchase order
router.post("/store", async (req, res, next) => {
    try {
        const shoppingCart = req.body.shoppingCart;
        console.log('shoppingCart: ', shoppingCart);
        if (shoppingCart.length === 0) throw new BadRequestError("Shopping cart cannot be empty.");

        const user = req.body.user;
        if (!user.name) throw new BadRequestError("User name cannot be empty.");
        if (!user.email) throw new BadRequestError("User email cannot be empty.");
        const receipt = req.body.receipt ? req.body.receipt : "";
        const newPurchase = Store.createPurchaseOrder(shoppingCart, user, receipt)
        console.log('newPurchase: ', newPurchase);

        res.status(201).json({ "purchase": newPurchase})

    } catch (error) {
        next(error);
    }
})


// get all purchases
router.get("/purchases", async (req, res, next) => {
    try {
        const purchases = Store.listPurchases();
        res.status(200).json({ "purchases": purchases });
    } catch (error) {
        next(error);
    }
})

// get a single purchase
router.get("/purchases/:purchaseId", async (req, res, next) => {
    try {
        const purchaseId = (req.params.productId);
        const purchase = Store.fetchProductById(purchaseId);
        res.status(200).json({ "purchase": purchase });
    } catch (error) {
        next(error);
    }
})

module.exports = router