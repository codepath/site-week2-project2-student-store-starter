const { storage } = require("../data/storage")

class store {
    
    static async listProducts() {
        const products = storage.get("products").orderBy("id, desc")
        return products
    }

    static async fetchById(id) {
        const post = storage.get("products").find({id}).value()
        return post
    }

    static async createPurchase(purchase) {
        const newPurchase = {...purchase}
        storage.get("purchases").push(newPurchase).write()
        return newPurchase
    }
}

module.exports = store