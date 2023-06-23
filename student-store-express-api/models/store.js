productSchema = {
    productID: {
        productID: Number,
        name: String,
        category: String,
        image: String,
        source: String,
        description: String,
        price: Number
    }
}
const { ProductNotFoundError,
    PurchaseNotFoundError,
    InvalidPurchaseError } = require("../utils/errors");
class Store {
    constructor(){
        // need error handling?
        console.log("creating new store object")
    };
    getAllProducts(limit = Infinity, offset = 0){
        // get storage object
        const storage  = this._getStorage();
        // get products object
        const productsObject = storage.get("products");

        // return all products from products obj
        return Object.values(productsObject);
    }
    getProductByID(productID){
        //  get storage object
        const storage = this._getStorage();
        // get products object from storage
        const productsObject = storage.get("products"); // retrieves products obj from storage
        // get product from product object ()
        const product = productsObject[productID] // product is undefined if not found
        // throw error if product cannot be found
        if (product === undefined){
            throw new ProductNotFoundError(productID);
        }
        // otherwise return product
        return product;
    }
    getAllPurchases(){
        // get storage object
        const storage = this._getStorage();
        // get purchases object
        const purchasesObject = storage.get("purchases");
        // return all purchases from purchases obj
        return Object.values(purchasesObject); 
    }
    getPurchasesByID(purchaseID){
        
        //  get storage object
        const storage = this._getStorage();
        // get purchases object from storage
        const purchasesObject = storage.get("purchases"); // retrieves purchase obj from storage
        // get purchase from purchase object ()
        const purchase = purchasesObject[purchaseID] // purchase is undefined if not found
        // throw error if purchase cannot be found
        if (purchase === undefined){
            throw new PurchaseNotFoundError(purchaseID);
        }
        // otherwise return purchase
        return product;
    }
     _getStorage(){
        // need error handling?
        const { storage } = require("../data/storage");
        return storage;
    }
    addPurchase(newPurchase){
        const TAX = 0.0875  // global tax
        const shoppingCart = newPurchase.shoppingCart;
        const user = newPurchase.user;

        if (user && shoppingCart){
            // if user and shopping cart are not undefined
            // calculate total and create purchase
            const name = user.name;
            const email = user.email;
            const duplicateChecker = new Set();
            let subtotal = 0
            for (let i = 0; i < shoppingCart.length; i++){
                // for each unique item in shopping cart, 
                // calculate the new subtotal
                const item = shoppingCart[i];
                if (duplicateChecker.has(item.id)){
                    // throw error for duplicate items in shopping cart
                    throw new InvalidPurchaseError(shoppingCart);
                }
                console.log(item)
                duplicateChecker.add(item.id);
                try{

                    subtotal += item.price * item.quantity;

                } catch (e){
                    // throw error if product.price or item.quantiy
                    // fields are undefined
                    throw new Error(e);
                }
            }
            const total = subtotal + subtotal*TAX;
            const createdAt = new Date().toLocaleString();
             // get storage object
            const storage = this._getStorage();
            let newPurchaseID = storage.get("newPurchaseID");
            const newPurchase = {
                name: name,
                id: newPurchaseID,
                email: email,
                total: total,
                order: shoppingCart,
                createdAt: createdAt,
                receipt: {
                    subtotal:  subtotal,
                    taxes : subtotal*TAX
                }
            }
           
            // get all current purchases from purchasesObject
            const purchasesObject = storage.get("purchases");
            // update purchasesObject with new purchase
            purchasesObject[newPurchaseID] = newPurchase;
            // write data into db
            storage.set("purchases", purchasesObject)
            console.log("added new purchase to purchase object: ", newPurchase);
            
            // update purchase id
            newPurchaseID += 1;
            storage.set("newPurchaseID", newPurchaseID);
            return newPurchase

        }
        // throws error if shopping cart or user value is 'falsy'
        throw new InvalidPurchaseError(shoppingCart)
    }
}
module.exports = {
    store: new Store(),
}