const express = require("express");
const router = express.Router();
const Store = require("../models/store");
const {BadRequestError, NotFoundError} = require("../utils/errors.js");

//get all products
router.get("/", async (req, res, next) => {
	try {
		const products = await Store.getProducts();
		res.status(200).json({products});
	} catch(error)  {
		next(error);
	}
});

//purchase GET request
router.get("/purchases/", async(req,res,next) => {
	try {
		// get ID
		const purchase = await Store.getPurchases();
		if(!purchase) {
			throw new NotFoundError("No purchases found");
		}
		res.status(200).json({purchase});

	} catch (error) {
		next(new BadRequestError(error));
	}
});
//get product by ID
router.get("/:productId", async(req,res,next) => {
	try {
		//get ID
		const productId = req.params.productId;
		
		const product = await Store.fetchProduct(productId);
		if(!product) {
			throw new NotFoundError("No product found");
		}
		res.status(200).json({product});

	} catch (error) {
		next(new BadRequestError(error));
	}
});

//purchase POST request
router.post("/", async (req, res, next) => {
	try {
		const user = req.body.user;
		const shoppingCart = req.body.shoppingCart;
		
		const newPurchase = await Store.createPurchase(user,shoppingCart);
		res.status(201).json({"purchase": newPurchase});
	} catch (error) {
		next(new BadRequestError(error));
	}
})




module.exports = router;