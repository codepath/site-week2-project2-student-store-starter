const express = require("express");
const router = express.Router();

const Products = require("../models/products_store");
const {BadRequestError,NotFoundError} = require("../utils/errors")

router.post("/", async (req, res, next) => {
  try {
    const newPost = req.body.product
    if (!newPost)
    {
      return next(new BadRequestError("No post found in request") )
    }
    const post = await Products.createProduct(newPost)
    res.status(201).json({ post })
    
  }
  catch (err)
  {
    next(err)
  }
  
})

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.listProducts()
    res.status(200).json({products})
  }
  catch (err)
  {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Products.fetchProductById(id)

    if (!product)
    {
      throw new NotFoundError("No Product Found")  
    }
    res.status(200).json({product})
    
  }
  catch (err)
  {
    next(err)
  }
})

module.exports = router;
