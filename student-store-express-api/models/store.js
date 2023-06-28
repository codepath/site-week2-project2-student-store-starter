const { storage } = require("../data/storage");

class Store {
    static async listProducts() {
        
        const products = storage.get("products").value();
        return products;
    }

    static async fetchProductById(productId) {

        const product = storage
        .get("products")
        .find({ id: Number(productId) })
        .value();
        return product;
    }
}

module.exports = Store;