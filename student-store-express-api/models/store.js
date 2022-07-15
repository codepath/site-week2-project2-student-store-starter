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
        //  will store purchased items
        let purchasedItems = []
        //  creates purchase date
        const createdAt = new Date().toISOString()
        //  creates purchase id
        const purchaseId = storage.get("purchases").value().length + 1

        //  will return receipt containing user & purchase details
        let receipt = [`~ Purchase Details ~`]
        receipt.push(`Name: ${user.name} ~ Email: ${user.email}`)


        //  throws 400 error if shopping cart or user fields are missing/empty
        if (!user || !user.name || user.name == "" || !user.email || user.email == "") {
            throw new BadRequestError("User is missing or contains missing/empty fields.")
        }

        if (!shoppingCart || shoppingCart.length == 0) {
            throw new BadRequestError("Shopping Cart is missing or does not contain any items.")
        }


        //  goes over shopping cart items & update receipt
        shoppingCart.forEach(async (item) => {
            //  throws 400 error if item fields are missing/empty
            if (!item.id || !item.quantity) {
                throw new BadRequestError("Item id and/or quantity is missing or contains an empty field.")
            }
            
            //  throws 400 error if item id or quantity is 0 or negative
            if (item.id <= 0 || item.quantity <= 0) {
                throw new BadRequestError("Item id and/or quantity is invalid.")
            }

            //  finds item in db products
            const product = await this.fetchProductById(item.id)

            //  adds cart info to array & receipt
            purchasedItems.push(item)
            receipt.push(`${product.name} ~ X${item.quantity}`)
        })

        
        //  calculates purchase total
        let total = 0

        for (let i = 0; i < shoppingCart.length; i++) {
            //  item id field
            const itemId = shoppingCart[i].id
            //  quantity field
            const quantity = shoppingCart[i].quantity
            //  gets item id in products db
            const product = await this.fetchProductById(itemId)

            //  total:
            total += (quantity * product.price)
        }

        //  adds subtotal (w/o tax) to receipt
        receipt.push(`Subtotal: $${(total).toFixed(2)}`)

        //  adds tax amount to receipt
        let tax = (total / 100) * 0.875
        receipt.push(`Tax amount: $${(tax).toFixed(2)}`)

        //  adds final total (w/ tax) to receipt
        receipt.push(`~ Total: $${(total + tax).toFixed(2)} ~`)


        //  creates final purchase object
        const newPurchase = {
            id: purchaseId,
            name: user.name,
            email: user.email,
            order: shoppingCart,
            total: Number((total + tax).toFixed(2)),
            createdAt: createdAt,
            receipt: receipt
        }

        //  pushes object to db
        storage.get("purchases").push(newPurchase).write()


        return newPurchase
    }
}


module.exports = Store