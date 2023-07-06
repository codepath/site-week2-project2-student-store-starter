const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const fs = require('fs')

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors())

const JSONFilePath = './data/db.json';

app.get('/', (req, res) => {
    res.status(200).json({ ping: 'pong' });
});

app.get('/store', (req, res) => {
    fs.readFile(JSONFilePath, 'utf8', (err, data) => {
        const jsonData = JSON.parse(data);
        res.status(200).json(jsonData);
    })
});

app.post('/checkout', (req, res) => {
    // Receive the request with the JSON body
    // Extract the productCart attribute
    // Iterate over every product in the cart
        // For every product in the cart, look for price in database
        // Add price times X quantity amount for given item
    // Add additional 8.75% tax to this total
    // Check last purchase and make new id for this purchases
    // Build another JSON object with id, name, email, order, total, and createdAt
    // Append this purchase to the db.json file
    // Send back this JSON object and status 200 the request

    const jsonDataString = JSON.stringify(req.body);
    const jsonDataObject = JSON.parse(jsonDataString);

    const userObject = jsonDataObject.user;
    const productCartObject = jsonDataObject.productCart;

    let dbObject;
    let newId;
    let newPurchase;
    let total;
    let subTotal = 0.0;

    fs.readFile(JSONFilePath, 'utf8', (err, data) => {

        dbObject = JSON.parse(data);

        for (const product of productCartObject) {
            const productPrice = dbObject.products[product.id - 1].price;
            subTotal += parseFloat(productPrice) * product.quantity;
        } 

        newId = dbObject.purchases.length;

        total = subTotal * 1.0875;

        const productCartJSON = productCartObject.map((product) => ({
            id: product.id,
            quantity: product.quantity
        }));
    
        newPurchase = {
            id: newId,
            name: userObject.name,
            email: userObject.email,
            order: productCartJSON,
            subtotal: subTotal,
            total: total,
        }

        dbObject.purchases.push(newPurchase);

        const updatedDbObject = JSON.stringify(dbObject, null, 2);

        fs.writeFile(JSONFilePath, updatedDbObject, 'utf8', (err) => {});

        return res.status(200).json(newPurchase);

    });
    
})

module.exports = app;