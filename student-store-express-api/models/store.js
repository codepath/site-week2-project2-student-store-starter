const {storage} = require("../data/storage")
const {BadRequestError} = require("../utils/errors")


class Store {
    //  returns all products in db
    static async listProducts() {
        const products = storage.get("products").value()
        return products
    }


    //  returns all purchases in db
    static async listPurchases() {
        const purchases = storage.get("purchases").value()
        return purchases
    }


    //  returns a single product by ID
    static async fetchProductById(productId) {
        const product = storage.get("products").find({id: Number(productId)}).value()
        return product
    }


    //  returns a single purchase by ID
    static async fetchPurchaseById(purchaseId) {
        const purchase = storage.get("purchases").find({id: Number(purchaseId)}).value()
        return purchase
    }



    //  creates purchase order & saves it to db
    static async createPurchase(user, shoppingCart) {
        //  will store & return total before tax
        let subtotal = 0
        //  will store purchased items
        let purchasedItems = []
        //  will return user & purchase details
        let receipt = [`Purchase Details for: ${user.name} - ${user.email}  ~~  `]
        //  creates purchase date
        const createdAt = new Date().toISOString()
        //  creates purchase id
        const purchaseId = storage.get("purchases").value().length + 1


        //  throws 400 error if shopping cart or user fields are missing
        if (shoppingCart.length == 0 || !user) {
            throw new BadRequestError("Empty shopping cart/missing fields.")
        }

        //  goes over shopping cart items
        shoppingCart.forEach((item) => {
            //  throws 400 error if duplicate items are in the cart
            if (purchasedItems.includes(item.id)) {
                throw new BadRequestError("Duplicate cart items found.")
            }
            
            //  throws 400 error if shopping cart fields are missing or quantity is negative
            if (!item.id || item.quantity == 0) {
                throw new BadRequestError("Missing/empty cart fields.")
            } else if (item.quantity < 0) {
                throw new BadRequestError("Invalid quantity.")
            }


            //  finds item in db products
            const product = this.fetchProductById(item.id)

            //  calculates subtotal of product & its quantity
            let cost = (product.price * item.quantity)
            subtotal += cost.toFixed(2)

            //  adds item to array & receipt
            purchasedItems.push(item)
            receipt.push(`${product.name} X${item.quantity} ~ Subtotal: $${subtotal} `)
        })

        //  adds 8.75% tax & pushes it to receipt
        total = (subtotal * 0.0875).toFixed(2)
        receipt.push(`~ Total: $${total}`)

        //  creates final purchase object
        const newPurchase = {
            id: purchaseId,
            name: user.name,
            email: user.email,
            order: shoppingCart,
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