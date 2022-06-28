const express = require("express");
const router = express.Router();

const Orders = require("../models/orders_store");
const { BadRequestError, NotFoundError } = require("../utils/errors")


router.get("/", async (req, res, next) => {
  try {
    const orders = await Orders.listOrders()
    res.status(200).json({orders})
  }
  catch (err)
  {
    next(err)
  }
})


router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id
    const order = await Orders.fetchOrdersById(id)

    if (!order)
    {
      throw new NotFoundError("No Product Found")  
    }
    res.status(200).json({order})
    
  }
  catch (err)
  {
    next(err)
  }
})

module.exports = router;