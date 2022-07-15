const express = require("express")
const router = express.Router()

const Store = require("../models/store")
const {NotFoundError, BadRequestError} = require("../utils/errors")


//  GETS array of all products
router.get("/store", async(req, res, next) => {
    try {
        const productList = await Store.listProducts()
        res.status(200).json({productList})
    } catch(err) {
      next(err)
    }
})


//  GETS array of all purchases
router.get("/purchases", async (req, res, next) => {
    try {
        const purchaseList = await Store.listPurchases()
        res.status(200).json({purchaseList})
    } catch(err) {
        next(err)
    }
})


//  GETS a single product
router.get("/store/:productId", async (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = await Store.fetchProductById(productId)
        if (!product) {
            throw new NotFoundError("Product not found.")
        }
        res.status(200).json({product})
    } catch(err) {
        next(err)
    }
})


//  GETS a single purchase
router.get("/purchases/:purchaseId", async (req, res, next) => {
    try {
        const purchaseId = req.params.purchaseId
        const purchase = await Store.fetchPurchaseById(purchaseId)
        if (!purchase) {
            throw new NotFoundError("Purchase not found.")
        }
        res.status(200).json({purchase})

    } catch(err) {
        next(err)
    }
})


//  creates new purchase then saves it to db
router.post("/store", async (req, res, next) => {
    try {
        const newPurchase = await Store.createPurchase(req.body.user, req.body.shoppingCart)
        res.status(201).json({purchase: {newPurchase}})
    } catch(err) {
       next(err)
    }
 })


module.exports = router