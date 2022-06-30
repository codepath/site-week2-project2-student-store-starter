const express = require("express")
const router = express.Router()
const store = require("../models/store")
router.use(express.json())
let id = 0;
const {storage} = require("../data/storage")

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
        res.status(200).json({"products": products })
    } catch(err) {
        next(err);
    }
});

// router.post("/", async(req, res, next) => {

//     try{
//         const newCart = req.body.shoppingCart
//         const newUser = req.body.user
//         if(!newCart) {
//             return next(new Error())
//         }
//         if(!newUser) {
//             return next(new Error())
//         }

//         newCart.map((e) => {
//             if(!e.quantity || !e.itemId) {
//             return next(new Error())
//         }
//         })
        

//         id += 1;
//         let price = 0;
//         let totalPrice = 0.0;
//         newCart.map((e) => {
//             console.log("PRICE", storage.get("products"))
//             price = storage.get("products").find({id:e.itemId}).value().price
//             totalPrice = totalPrice + (price*e.quantity)
//         })

//         let tax = (totalPrice*0.0875)
//         totalPrice = (totalPrice + tax).toFixed(2)
        

//         let purchase = {
//             id: id,
//             name: newUser.name,
//             email: newUser.email,
//             order: newCart,
//             total: totalPrice,
//             createdAt: new Date().toISOString()
//         }

//         const order = await store.createOrder(purchase)
//         res.status(201).json({ "purchase": order })
        
//     }catch(err){
//         next(err)
//     }
// })



module.exports=router