const {storage} = require("../data/storage")
const { BadRequestError } = require("../utils/errors")
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

    static async getPurchaseById(purchaseId) {
        const purchase = await storage.get("purchases").find({id: Number(purchaseId)}).value()
        return purchase
    }

    static addPurchase(purchase) {
        if(!purchase) {
            throw new BadRequestError("No valid purchase sent.")
        }
        const requiredFields = ["id", "name", "email", "order", "total", "createdAt"]
        requiredFields.forEach(field => {
            if (!purchase[field] && purchase[field] !== 0) {
                throw new BadRequestError(`Field: ${field} is required in purchase`)
            }
        })

        storage.get("purchases").push(purchase).write()
        return;
    }
}

module.exports = Store