const express = require("express")
const Store = require("../models/store")
const router = express.Router()
const { NotFoundError, BadRequestError } = require("../utils/errors")

router.get("/", async (req, res, next) => {
    try {
        const products = await Store.getProducts()
        return res.status(200).json({ products })
    }
    catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const shoppingCart = req.body.shoppingCart
        const user = req.body.user
        const lines = [`Showing receipt for ${user.name} available at ${user.email}:`]
        let total = 0
        let totalQuantity = 0
        let itemPrices = []
        let itemNames = []

        if (shoppingCart && user) {
            shoppingCart.forEach(async (item) => {
                if ("quantity" in item && "itemId" in item) {
                    const product = await Store.getProductById(item.itemId)
                    let itemTotal = (item.quantity * product.price).toFixed(2)
                    totalQuantity += item.quantity
                    total += parseFloat(itemTotal)
                    itemPrices.push(product.price)
                    if (!itemNames.includes(product.name)){
                        itemNames.push(product.name)
                    } else {
                    throw new BadRequestError("duplicate items inside shopping cart")
                    }
                    lines.push(`${item.quantity} total ${product.name} purchased at a cost of $${product.price} for a total cost of $${itemTotal}.`)
                } else {
                    throw new BadRequestError("each item in the shopping cart should have itemId and quantity field")
                }
            })

        } else {
            throw new BadRequestError("shoppingCart or user field not found in request body")
        }
        const purchases = await Store.getPurchases()
        lines.push(`Before taxes, the subtotal was $${total.toFixed(2)}`)
        lines.push(`After taxes and fees were applied, the total comes out to $${(total * 1.0875).toFixed(2)}`)

        const purchase = {
            id: purchases.length + 1,
            name: user.name,
            email: user.email,
            order: shoppingCart,
            subtotal: Number(total.toFixed(2)),
            total: Number((total * 1.0875).toFixed(2)),
            createdAt: new Date().toISOString(),
            receipt: { lines: lines },
            totalQuantity: totalQuantity,
            itemPrices: itemPrices,
            itemNames: itemNames
        }
        Store.addPurchase(purchase)
        return res.status(201).json({ "purchase": purchase })
    }
    catch (err) {
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
