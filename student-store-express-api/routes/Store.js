const express = require("express")
const Store = require("../models/Store")
const router = express.Router()

// list products
router.get("/", async (req, res, next) => {
    try {
      const products = await Store.getProducts()
      res.status(200).json({ products })
    } catch (err) {
      next(err)
    }
  })

  // get single product for product details page
  router.get("/:productId", async (req, res, next) => {
    try {
      const productId = req.params.productId
      const product = await Store.fetchProductById(productId)
      if (!product) {
        throw new Error("smth went wrong with getting the product")
      }
      res.status(200).json({ product })
    } catch (err) {
      next(err)
    }
  })

  module.exports = router