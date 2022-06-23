const express = require("express");
const router = express.Router();
const Store = require("../models/store");
const {BadRequestError, NotFoundError} = require("../utils/errors.js");
const Storage = require("../data/storage"); 

router.get("/", async (req, res, next) => {
	try {
		const posts = await Store.getProducts();
		res.status(200).json({posts});
	} catch(error)  {
		next(error);
	}
});

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

	}
});


// router.post("/", async (req, res, next) => {
// 	try {

// 	} catch (err) {
// 		next(new BadRequestError(err));
// 	}
// })

module.exports = router;