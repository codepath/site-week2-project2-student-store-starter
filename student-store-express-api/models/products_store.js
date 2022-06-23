const { storage } = require('../data/storage')

class Store {
  static async createProduct(product) {
    const postedAt = new Date().toISOString()
    const newPost = { ...product, postedAt }

    storage.get("products").push(newPost).write()

    return newPost
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
