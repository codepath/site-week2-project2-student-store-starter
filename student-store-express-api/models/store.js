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
        this.newPurchaseID = 0;
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
    getAllPurhases(){
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
            const duplicateChecker = set();
            let subtotal = 0;
            for (let i = 0; i < shoppingCart.length; i++){
                // for each unique item in shopping cart, 
                // calculate the new subtotal
                const item = shoppingCart[i];
                if (duplicateChecker.has(item.itemID)){
                    // throw error for duplicate items in shopping cart
                    throw new InvalidPurchaseError(shoppingCart);
                }
                duplicateChecker.add(item.itemId);
                product = this.getProductByID(item.itemId);
                try{

                    subtotal += product.price * item.quantity;

                } catch (e){
                    // throw error if product.price or item.quantiy
                    // fields are undefined
                    throw new Error(e);
                }
            }
            const total = subtotal + subtotal*TAX;
            const createdAt = new Date().toLocaleString();
            const newPurchase = {
                name: name,
                id: this.newPurchaseID,
                email: email,
                total: total,
                order: shoppingCart,
                createdAt: createdAt,
                receipt: this.generateReceipt(name,
                    this.newPurchaseID, email,
                    total, shoppingCart, createdAt),
            }
            // update new purchase id
            this.newPurchaseID += 1
            const storage = this._getStorage();
            
            // write new purchase into storage

            return newPurchase

        }
        // throws error if shopping cart or user value is 'falsy'
        throw new InvalidPurchaseError(shoppingCart)
    }
    generateReceipt(){
        let receipt = `Receipt
--------------------------
Purchase ID: ${id}
Customer Name: ${name}
Email: ${email}
Date: ${createdAt}
--------------------------
Items Purchased:
`;

    order.forEach((item, index) => {
        receipt += `${index + 1}. ${item.name} - $${item.price} ${item.quantity}x\n`;
    });

    receipt += `--------------------------
Total: $${total}`;

    return receipt;
    }
}
module.exports = {
    store: new Store(),
}