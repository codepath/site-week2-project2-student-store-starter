const express = require("express")
const { filterByProductID } = require("../model/store.jsx")
const router = express.Router()
const { BadRequestError} = require("../model/error.jsx")
const filterFunctions = require("../model/store.jsx")

router.get("/", async (req, res, next) => {
  try {
    const products = await filterFunctions.fetchProducts()
    res.status(200).json({products})
  }
  catch (err)
  {
    next(err)
  }
})
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

router.post("/", async (req, res, next) => {
    try {
      const user = req.body.user
  
      const shoppingCart= req.body.shoppingCart
  
      if (!user && !shoppingCart)
      {
        return next(new BadRequestError("No post found in request") )
      }
      const order = await filterFunctions.createOrder(user,shoppingCart)
      res.status(201).json({"purchase": order})
  
      } catch (error) {
          next(new BadRequestError(error));
      }
    })

module.exports = router