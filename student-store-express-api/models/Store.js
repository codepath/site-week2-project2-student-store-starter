const { storage } = require("../data/storage")

class Store {

  // list products
  static async getProducts() {
    const products = storage.get("products").value()
    return products
  }

  // get single product for product details page
  static async fetchProductById(productId) {
    const product = storage
      .get("products")
      .find( { id: Number(productId) } )
      .value()
    return product
  }

}

module.exports = Store