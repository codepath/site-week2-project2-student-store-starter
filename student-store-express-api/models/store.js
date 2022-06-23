const {
    BadRequestError
} = require("../utils/errors");
const {
    storage
} = require("../data/storage");
class Store {
    static async createPurchase(purchase) {
        const purchasedAt = new Date().toISOString()
        const newPurchase = {
            ...purchase,
            purchasedAt
        };

        storage.get("purchases").push(newPurchase).write();
    }

    static async getProducts() {
        //get all products
        const products = storage.get("products").orderBy("id", "desc");
        return products;
    }

    static async fetchProduct(productId) {
        //get single product by ID
        const product = storage.get("products").find({id: Number(productId)}).value();
        
        return product
    }

    static async getPurchases() {

    }

    static async fetchPurchase() {

    }
}

module.exports = Store;