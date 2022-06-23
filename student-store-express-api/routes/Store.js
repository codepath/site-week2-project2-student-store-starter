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

  module.exports = router