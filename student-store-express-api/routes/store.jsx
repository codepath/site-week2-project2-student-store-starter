const express = require("express")
const { filterByProductID } = require("../model/store.jsx")
const router = express.Router()


router.get('/:productId', async (req, res, next) => {
    try{
    const productId = req.params.productId
    const product = await filterByProductID(productId)
    if (!product) {
        throw ("Product not found")
      }
    res.status(200).json({ product })
    }
    catch (err){
        next(err)
    }
})

module.exports = router