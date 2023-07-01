const express = require('express');
const router = express.Router();
const { storage } = require('../data/storage');
const { v4: uuidv4 } = require('uuid');

function generateUniqueId() {
  return uuidv4();
}

router.get('/', (req, res) => {
  const items = storage.get('purchases').value();

  res.status(200).json(items);
});

router.get('/:id', (req, res) => {
  const purchaseId = req.params.id;

  const purchase = storage.get('purchases').find({ id: purchaseId }).value();

  if (!purchase) {
    return res.status(404).json({ error: 'Purchase not found' });
  }

  res.status(200).json(purchase);
});

router.post('/', (req, res) => {
  const { items, date, email, buyerName, tax, subtotal, total } = req.body;

  if (!items || !date || !email || !buyerName || !tax || !subtotal || !total) {
    return res.status(400).json({ error: `You're missing one or more fields` });
  }

  const newPurchase = {
    id: generateUniqueId(),
    items,
    date,
    email,
    buyerName,
    tax,
    subtotal,
    total,
  };

  storage.get('purchases').push(newPurchase).write();

  res.status(201).json(newPurchase);
});

router.delete('/:id', (req, res) => {
  const purchaseId = req.params.id;

  const purchase = storage.get('purchases').find({ id: purchaseId }).value();

  if (!purchase) {
    return res.status(404).json({ error: 'Purchase not found' });
  }

  storage.get('purchases').remove({ id: purchaseId }).write();

  res.status(200).json({ message: 'Purchase deleted successfully' });
});

module.exports = router;