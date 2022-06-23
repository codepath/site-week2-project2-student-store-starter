const express = require("express")

const Store = require("../models/products_store")

const router = express.Router()

router.get("/store", (req, res, next) => {
    res.status(200).json(Store.Pulldata())

})

module.exports = router