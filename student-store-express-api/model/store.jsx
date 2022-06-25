//const express = require("express");
//const data = require(".db.json")
const { storage } = require("../data/storage")



class filterFunctions {
    static async showAll(){}
    static async filterByProductID(productId){
        const product = storage.get("products").find({ id: Number(productId) }).value()
        return product;
    }

}

module.exports = filterFunctions