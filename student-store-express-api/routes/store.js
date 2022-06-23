const express = require("express");
const router = express.Router();
const GiftExchange = require("../models/store");
const {
	BadRequestError
} = require("../utils/errors.js");

router.post("/pairs", async (req, res, next) => {
	try {

	} catch (err) {
		next(new BadRequestError(err));
	}
})


router.post("/traditional", async (req, res, next) => {
	try {

	} catch (err) {
		next(new BadRequestError(err));
	}
})

module.exports = router;