const express = require('express');
const router = express.Router();

const { storage } = require('../data/storage');

const products = storage.get_products();

router.get('/', (req, res) => {
	res.status(200).send(products);
});

router.get('/:productId', (req, res) => {
	const productId = req.params.productId;
	const product = products[productId];

	res.status(200).send(product);
});

module.exports = router;
