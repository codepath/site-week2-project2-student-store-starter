const express = require("express")
const Store = require("../models/store")
const router = express.Router()
const { NotFoundError} = require("../utils/errors")

router.get("/", async (req, res, next) => {
    try {
        const purchases = await Store.getPurchases()
        return res.status(200).json({ purchases })
    }
    catch (err) {
        next(err)
    }
})

router.get("/:purchaseId", async (req, res, next) => {
    try {
        const purchaseId = req.params.purchaseId
        const purchase = await Store.getPurchaseById(purchaseId)
        if (!purchase) {
            throw new NotFoundError("Order not found")
        }
        res.status(200).json({ purchase })
    } catch (err) {
        next(err)
    }
})

module.exports = router