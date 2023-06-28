const express = require("express");
const Store = require("../models/store");
const router = express.Router();

// Home screen
router.get("/", async (request, response) => {
    response.status(400).json({ ping: "pong" });
});

router.get("/store", async (req, res) => {
    try {
        const products = await Store.listProducts();
        res.status(200).json({products});
    } catch (err) {
      console.log(err);
    }
});

router.get("/store/:productId", async (req, res) => {
try {
    const productId = req.params.productId;
    const product = await Store.fetchProductById(productId)
    if (!product) {
        throw "Error, product not found";
    }
    res.status(200).json({ product });
} catch (err) {
    console.log(err)
}
});

module.exports = router;