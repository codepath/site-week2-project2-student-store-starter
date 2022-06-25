const express = require('express')
const store = require("../models/store")
// insert badrequest error here
const {BadRequestError, NotFoundError} = require("../utils/errors")
const router = express.Router()
const { storage } = require("../data/storage")
let postId = 0;

router.get('/', async (req, res, next) => {
   try {
        const products = await store.listProducts()
        res.status(200).json({"products": products})
   }
   catch (err) {
    next(err)
   }
});

router.get("/:productId", async(req, res, next) => {
    try{
        const id = Number(req.params.productId)
        const prod = await store.fetchById(id)
        if (!prod) {
            throw new NotFoundError("No post found")
        }
        res.status(200).json({prod})
    }
    catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    let shoppingCart = req.body.shoppingCart
    let totalCost = 0;
    shoppingCart.map((product) => {
        totalCost += (storage.get("products").find({id:product.id}).value().price) * product.quantity
    })

    totalCost += (totalCost * 0.0875)

    let user = req.body.user
    let purchase = {id: postId, name: user.name, email: user.email, order: shoppingCart, total: totalCost, createdAt: new Date().toISOString()}
    let order = await store.createPurchase(purchase)
    try {
        res.status(201).json({"purchase": order})
        postId += 1
    }
    catch (err) {
        next(err)
    }
})

/*
router.post('/', (req, res, next) => {


    res.status(200).send({"purchases":purchases})
}) 

/*
router.post('/store/:productId', (req, res, next) => {
    res.status(200).send({"products":product})
}) */

module.exports = router;