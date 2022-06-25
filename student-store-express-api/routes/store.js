const express = require("express")
const Store = require("../models/store")
const router = express.Router()

const {BadRequestError, NotFoundError} = require("../utils/errors")






router.get('/store', async (req, res) => {
    const allProducts = await Store.listAllProducts()
    res.status(200).json({allProducts})
})



router.get('/store/:productId', async(req, res) => {
    const id = req.params.productId
    const product = await Store.getProductFromId(id)
    res.status(200).json({product})
})


router.post('/store', async(req, res) => {

    const purchase = await Store.createPurchaseOrder(req.body.user, req.body.shoppingCart)
    console.log(purchase)
    res.status(201).json({ purchase })

    // const id = req.params.productId
    // const product = await Store.getProductFromId(id)
    // res.status(200).json({product})

})


module.exports = router