const express = require('express');
const router = express.Router();

const { storage } = require('../data/storage');

const products = storage.get_products();

// errors
const { badRequestError } = require('../utils/errors');

router.get('/', (req, res) => {
	res.status(200).send({'products': products});
});

router.get('/:productId', (req, res) => {
	const productId = req.params.productId;
	const product = products[productId];

	res.status(200).send({'product': product});
});

// POST requests
router.post('/', (req, res) => {
	// receive an object with a `shoppingCart`(each has itemId, quantity fields) array,
	// and a `user` object(each has name and email fields)
	// if either is not in the POST body, throw 400 error
	// if a duplicate of a product in the shoppingCart exists, throw 400 error
	// if either itemId or quantity is missing for any shoppingCart item, throw 400 error
	const body = req.body;
	const shoppingCart = body.shoppingCart;
	const user = body.user;
    
	// calculate total cost for items in shoppingCart
	let total = 0;
	for (let cartItem of shoppingCart) {
		const product = products.find((prod) => prod.id === cartItem.itemId);
		total += product.price * cartItem.quantity;
	}
    
	// calculate 8.75pc tax to the total
	const tax = total * 0.0875;

	// create a new purchase object
	const currentPurchasesNo = storage.get_purchases().length;
	const purchase = {
		id: currentPurchasesNo + 1,
		name: user.name,
		email: user.email,
		order: shoppingCart,
		total: total + tax,
		createdAt: new Date().toLocaleString('en-US', {'timeZone': 'UTC'})
	};

	res.send(purchase);
});

module.exports = router;
