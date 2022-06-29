//const express = require("express");
//const data = require(".db.json")
const { storage } = require("../data/storage")



class filterFunctions {
    static async filterByProductID(productId){
        const product = storage.get("products").find({ id: Number(productId) }).value()
        return product;
    }
    static async createOrder(user, shoppingCart) {
        if(!shoppingCart || !user.name || !user.email){
            throw new BadRequestError("Invalid request, user or shoppingCart missing")
        }
        let total = 0;
        const products = await filterFunctions.listProducts();
        const purchases = await filterFunctions.fetchPurchases();
        const purchaseId = purchases.length + 1;
        const createdAt = new Date().toISOString();
        const receipt = {user: user, items: []};
        let items = [];
        shoppingCart.forEach((item) => {
            if(!item.id || !item.quantity){
                throw new BadRequestError("Invalid request, item id or quantity missing")
            }
            if(items.includes(item.id)){
                throw new BadRequestError("Duplicate items in cart");
            }
            const productDetails = products.find(product => product.id === item.id);
            total += productDetails.price * item.quantity
            receipt.items.push({name: productDetails.name, quantity: item.quantity, price: productDetails.price.toFixed(2), totalPrice: (productDetails.price*item.quantity).toFixed(2)})
            items.push(item.id);
        })
        //calculate total cost, add tax, create new purchase object
        total += total*0.0875;
        let newPurchase = {id: purchaseId, name: user.name, email: user.email, order: shoppingCart, total: total, createdAt: createdAt, receipt: receipt};
        storage.get("purchases").push(newPurchase).write();
        return newPurchase;
      }
      static async fetchPurchases() {
        const purchases = storage.get("purchases").value();
        return purchases;
      }
        static async fetchProducts(){
            const products = storage.get("products").orderBy("id","desc")
            return products
        }

}

module.exports = filterFunctions