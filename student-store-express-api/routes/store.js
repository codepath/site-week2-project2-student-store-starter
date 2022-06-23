const express = require("express")
const Store = require("../models/store")
const router = express.Router()
const {NotFoundError, BadRequestError} = require("../utils/errors")

router.get("/", async (req,res,next) => {
    try{
        const products = await Store.getProducts()
        return res.status(200).json({products})
    }
    catch (err){
        next(err)
    }
})

router.post("/", async (req,res,next) => {
    try{
        const shoppingCart = req.body.shoppingCart
        const user = req.body.user
        const lines = [`Showing receipt for ${user.name} available at ${user.email}:`]
        let total = 0
        if (shoppingCart && user) {
            shoppingCart.forEach( (item) => {
                if ("quantity" in item && "itemId" in item) {
                    const product = Store.getProductById(item.itemId)
                    let itemTotal = item.quantity * product.price
                    total += itemTotal
                    lines.push(`${item.quantity} total ${product.name} purchased at a cost of $${item.price.toFixed(2)} for a total cost of $${itemTotal.toFixed(2)}.`)
                } else {
                    throw new BadRequestError("each item in the shopping cart should have itemId and quantity field")
                }
            })
            lines.push(`Before taxes, the subtotal was $${total}`)
            total = total * 1.0875
            lines.push(`After taxes and fees were applied, the total comes out to $${total}`)

        } else {
            throw new BadRequestError("shoppingCart or user field not found in request body")
        }
        const purchases = Store.getPurchases()
        
        const purchase = {
            id: purchases.length + 1,
            name: user.name,
            email: user.email,
            order: shoppingCart,
            total: total,
            createdAt: new Date().toISOString(),
            receipt: {lines: lines}
        }
        return res.status(201).json({"purchase": purchase})
    }
    catch (err){
        next(err)
    }
})

router.get("/:productId", async (req, res, next) => {
    try {
    const productId = req.params.productId
    const product = await Store.getProductById(productId)
    if (!product) {
        throw new NotFoundError("Transaction not found")
    }
    res.status(200).json({ product })
    } catch (err) {
    next(err)
    }
})

module.exports = router