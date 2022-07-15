const {storage} = require("../data/storage")
const {BadRequestError} = require("../utils/errors")


class Store {
    //  lists all products in db
    static async listProducts() {
        const products = storage.get("products").value()
        return products
    }


    //  lists all purchases in db
    static async listPurchases() {
        const purchases = storage.get("purchases").value()
        return purchases
    }


    //  fetches a single product by ID
    static async fetchProductById(productId) {
        const product = storage.get("products").find({id: Number(productId)}).value()
        return product
    }


    //  fetches a single purchase by ID
    static async fetchPurchaseById(purchaseId) {
        const purchase = storage.get("purchases").find({id: Number(purchaseId)}).value()
        return purchase
    }



    //  creates purchase order & saves it to db
    static async createPurchase(user, shoppingCart) {
        //  throws 400 error if shopping cart or user fields are missing
        if (shoppingCart.length == 0 || user.name == "" || user.email == "") {
            throw new BadRequestError("Missing shopping cart/empty fields detected.")
        }

        //  will return total before tax
        let subtotal = 0

        //  will store purchased items
        let purchasedItems = []

        //  will return user & purchase details
        let receipt = [`Purchase Details for: ${user.name} - ${user.email}  ~~  `]

        
        shoppingCart.forEach((item) => {
            //  throws 400 error if duplicate items are in the cart
            if (purchasedItems.includes(item.id)) {
                throw new BadRequestError("Duplicate cart items detected.")
            }
            
            //  throws 400 error if shopping cart fields are missing
            if (!item.id || item.quantity == 0) {
                throw new BadRequestError("Missing/empty cart fields detected.")
            }

            const product = this.fetchProductById(item.id)
            let cost = (product.price * item.quantity)
            subtotal += cost.toFixed(2)

            purchasedItems.push(item)
            receipt.push(`${product.name} X${item.quantity} ~ Subtotal: $${subtotal} `)
        })

        //  adds 8.75% (0.0875) tax to total
        total = (subtotal * 0.0875).toFixed(2)
        receipt.push(`~ Total: $${total}`)

        //  purchase date
        const createdAt = new Date().toISOString()

        //  creates purchase id
        const purchaseID = (storage.get("purchases").value().length) + 1

        //  creates final purchase object
        const newPurchase = {
            id: purchaseID, 
            name: user.name, 
            email: user.email, 
            order: purchasedItems, 
            total: total, 
            createdAt: createdAt, 
            receipt: receipt
        }

        //  pushes object to db
        storage.get("purchases").push(newPurchase).write()
        
        return newPurchase
    }
}


module.exports = Store