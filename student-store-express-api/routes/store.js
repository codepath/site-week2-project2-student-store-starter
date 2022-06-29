const express = require('express');
const router = express.Router();

const { storage } = require('../data/storage');

router.get('/', (req, res) => {
	res.status(200).send(storage.get_products());
});

module.exports = router;
