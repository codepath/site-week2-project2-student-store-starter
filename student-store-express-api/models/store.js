const {storage} = require("../data/storage")

const {BadRequestError, NotFoundError} = require("../utils/errors")



class Store { 

    // fetches all products from db.jason
    static async listAllProducts() {
        const listOfProducts = storage.get("products").orderBy("id", "desc");
        return listOfProducts
    }


    // fetch single product by ID
    static async getProductFromId(productId) {
        const matchingProduct = storage.get("products").find({id: Number(productId)}).value();
        return matchingProduct
    }


    static async createPurchaseOrder(user, shoppingCart) {
        if (!user.name || !user.email || !shoppingCart) {
            return (new BadRequestError("Missing user info or empty cart"))
        }



        // checking to see if quantity or itemId field is missing anywhere in shopping cart
        shoppingCart.forEach((item) => {
            if (!item.itemId || !item.quantity) {
                return (new BadRequestError("Missing itemID or quantity in cart"))
            }
        })



 

        // initializing purchaseObject variables
        const purchaseId = storage.get("purchases").value.length + 1
        const createdAt = new Date().toISOString
        let total = 0;
        // pulling list of products to get prices needed to calculate total
        const products = await Store.listAllProducts()
        

        // calculating total
        shoppingCart.forEach((item) => {
            const productInfo = storage.get("products").find({id: Number(item.itemId)}).value()
            
            total += productInfo.price * item.quantity
            
        })
        total = total + (total * 0.0875)



        // creating purchase object
        let purchaseObject = {id: purchaseId, name: user.name, email: user.email, order: shoppingCart, total: total, createdAt: createdAt}
      

        storage.get("purchases").push(purchaseObject).write()
        return purchaseObject

    }




    


}

    




module.exports = Store