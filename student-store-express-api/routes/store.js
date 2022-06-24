const express = require("express")
const router = express.Router()
const store = require("../models/store")

//list all products
router.get("/", async (req, res, next) => {

    try {
        const products = await store.listProducts()
        res.status(200).json({ products });
        //res.status(200).json({"ping":"pong"})
    } catch(err) {
        next(err);
    }
});

//fetch single product
router.get("/:productsId", async (req, res, next) => {

    try {
        const productsId = req.params.productsId
        console.log("the product id", productsId)
        const products = await store.fetchProductsId(productsId)
        if(!products){
            throw error("Not Found")
        }
        res.status(200).json(products)
    } catch(err) {
        next(err);
    }
});



module.exports=router