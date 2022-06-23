const {storage} = require("../data/storage")
class Store {
    static async getProducts() {
        const products = await storage.get("products").value()
        return products
    }

    static async getProductById(productId) {
        const product = storage.get("products").find({id: Number(productId)}).value()
        return product
    }

    static async getPurchases() {
        const purchases = await storage.get("purchases").value()
        return purchases
    }
}

module.exports = Store