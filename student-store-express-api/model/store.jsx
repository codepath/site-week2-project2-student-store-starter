//const express = require("express");
//const data = require(".db.json")
const { storage } = require("../data/storage")



class filterFunctions {
    static async showAll(){}
    static async filterByProductID(productId){
        const product = storage.get("products").find({ id: Number(productId) }).value()
        return product;
    }
    static async createOrder(user,shoppingCart) {
        const purchasedAt = new Date().toISOString()
        const newOrder = { user, shoppingCart, purchasedAt }
    
        storage.get("purchases").push(newOrder).write()
    
        return newOrder
      }

}

module.exports = filterFunctions