const express = require("express");
// const bodyParser = require('body-parser')
// const app = express()
// const router = express.Router();
// const { store } = require("../data/db.json");
const { storage } = require("../data/storage")
const { uuid } = require('uuidv4')
const error = require("../utils/errors");
// List all products currently in the db.json file

// Fetch a single product by its id
// Create a purchase order

function findProductsById(products, id) {
    if (typeof id === 'string') {
        return products.find((product) => product.id === id);
    }
}
const formatPrice = (amont) => `$${formatter.format(amount)}`
class Store {
    static calculateSubTotal = (cart, products) => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += findProductsById(cart[i])?.price * cart[i].quantity
        }
        return formatPrice(total);

    }
    static calculateTaxes = (subtotal) => {
        let taxes = subtotal * 0.875;
        return formatPrice(taxes);
    }
    static totalWithTax = (subtotal, taxes) => {
        let total = subtotal + taxes;
        return formatPrice(total);
    }
    static listProducts() {
        return storage.get("products");
    }
    static fetchProductById(productId) {
        let prods = this.listProducts();
        console.log(prods[productId - 1]);
        return prods[productId - 1];
    }
    // static createReceipt()

    static purchaseProducts(cart, userInfo) {
        if (!cart || !Object.keys(cart).length) {
            throw new BadRequestError('No cart or items in cart found to checkout');
        }
        if (!userInfo || !Object.keys(userInfo).length) {
            throw new BadRequestError('No user info to checkout with');

        }
        const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index);
        if (toFindDuplicates(cart) != null) {
            throw new BadRequestError('Duplicate items in the cart');
        }
        const products = storage.get('products').value();
        const subtotal = Store.calculateSubtotal(cart, products);
        const total = Store.totalWithTax(subtotal);
        const receipt = Store.createReceipt({
            cart, subtotal, total, products, userInfo
        })
        const purchase = {
            id: uuidv4(),
            name: userInfo.name,
            email: userInfo.email,
            total,
            receipt,
        };
        storage.get('purchases').push(purchase).write();
    }
}


module.exports = Store;
