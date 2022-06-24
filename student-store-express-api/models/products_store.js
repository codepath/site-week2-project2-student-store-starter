const { storage } = require('../data/storage')

class Store {
  static async createOrder(user,shoppingCart) {
    const purchasedAt = new Date().toISOString()
    const newOrder = { user, shoppingCart,purchasedAt }

    storage.get("purchases").push(newOrder).write()

    return newOrder
  }
  static async listProducts() {
    const posts = storage.get("products").orderBy("id","desc")
    return posts
  }
  static async fetchProductById(id) {
    const product =  storage.get("products").find({id:Number(id)}).value()
    return product

  }
}
module.exports = Store
