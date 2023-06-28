const express = require('express');
const router = express.Router();
const { storage } = require('../data/storage');

router.get('/', (req, res) => {
  const items = storage.get('products').value();

  res.status(200).json(items);
});

module.exports = router;