const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");
class Store {
    static async createPurchase(purchase) {
        //get timestamp and append to object
        const purchasedAt = new Date().toISOString()
        const newPurchase = {
            ...purchase,
            purchasedAt
        };
        //write to db.json
        storage.get("purchases").push(newPurchase).write();
        //return object
        return newPurchase;
    }

    static async getProducts() {
        //get all products
        const products = storage.get("products").orderBy("id", "asc");
        return products;
    }

    static async fetchProduct(productId) {
        //get single product by ID
        const product = storage.get("products").find({id: Number(productId)}).value();
        return product
    }

    static async getPurchases() {
        const purchases = storage.get("purchases").orderBy("purchasedAt","desc");
        return purchases
    }

    static async fetchPurchase() {
        //TODO: implement this
    }
}

module.exports = Store;