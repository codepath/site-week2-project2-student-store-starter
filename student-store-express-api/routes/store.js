const express = require("express")
const Store = require("../models/store")
const router = express.Router()



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
    // const id = req.params.productId
    // const product = await Store.getProductFromId(id)
    // res.status(200).json({product})
})


module.exports = router