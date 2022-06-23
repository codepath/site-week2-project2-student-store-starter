const { storage } = require("../data/storage")

class Store {

  // list products
  static async getProducts() {
    const products = await storage.get("products").value()
    return products
  }
}

module.exports = Store