const { NotFoundError, BadRequestError } = require('../utils/errors')
const { storage } = require('../data/storage')

class Store {
    constructor(){
        this.super()

    }

    // GET REQUESTS

    // products requests
    static listProducts(){
        // list all products
        const products = storage.get("products").value();
        return products;
    }
    static fetchProductById(productId){
        // fetch a Product
        const product = storage
            .get("products")
            .find({ id: Number(productId)})
            .value()
        
        if(product) return product;

        throw new NotFoundError("No product found with this ID.")
    }
    // purchases requests
    static listPurchases() {
        // list all purchases
        const purchases = storage.get("purchases").value();
        return purchases;
    }
    static fetchPurchaseById(purchaseId){
        // fetch a Purchase
        const purchase = storage
            .get("purchases")
            .find({ id: Number(purchaseId)})
            .value()
        if(purchase) return purchase;

        throw new NotFoundError("No purchase found with this ID.")
    }

    
    // POST REQUEST
    static createPurchaseOrder(shoppingCart, user, receipt=""){

        // Handle errors
        Store.checkErrorsCart(shoppingCart);

        const {name, email} = user;
        const purchases = storage.get("purchases").value();
        const purchaseId = purchases.length + 1
        const createdAt = new Date().toISOString()
        const purchaseTotal = Store.getTotal(shoppingCart);

        const newPurchase = { 
            "id": purchaseId, 
            "name": name,
            "email": email,
            "order": shoppingCart,
            "total": purchaseTotal.toFixed(2),
            "createdAt": createdAt,
            "receipt" : receipt
        } 
        storage.add("purchases", newPurchase);
        
        return newPurchase;
    }

    //POST HELPERS
    static  getTotal(shoppingCart){
        let purchaseTotal = 0
        shoppingCart.map((cartItem) => {
            console.log('cartItem: ', cartItem);
            const {productId, quantity} = cartItem;

            const product = Store.fetchProductById(productId);

            console.log('product: ', product);
            
            let productPrice = product.price * quantity;
            purchaseTotal += productPrice;

        })
        purchaseTotal *= 1.0875;
        return purchaseTotal;
    }

    static raiseErrorIfHasDuplicates(shoppingCart) {
        let seen = new Set();
        var hasDuplicates = shoppingCart.some(function(cartItem) {
            return seen.size === seen.add(cartItem.productId).size;
        });
        if(hasDuplicates){
           throw new BadRequestError("Shopping cart cannot have duplicates."); 
        }
    }

    static raiseErrorIfCartMissingFields(shoppingCart) {
        shoppingCart.map( (cartItem) => {
            if(!cartItem.quantity){
                throw new BadRequestError("Shopping cart cannot have empty quantity."); 

            }
            if(!cartItem.productId){
                throw new BadRequestError("Shopping cart cannot have empty id."); 

            }
        } )
    }
    static checkErrorsCart(shoppingCart){
        this.raiseErrorIfHasDuplicates(shoppingCart);
        this.raiseErrorIfCartMissingFields(shoppingCart);
    }

}


module.exports = Store;