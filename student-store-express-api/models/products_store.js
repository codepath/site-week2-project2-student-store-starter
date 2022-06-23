const storage = require('../data/db.json')



class Store {
  static async createProduct(product) {
    const postedAt = new Date().toISOString()
    const newPost = { ...product, postedAt }

    storage.get("products").push(newPost).write()

    return newPost
  }
  static async listProducts() {
   // const posts = await storage.get("products").orderBy("id", "desc")
    
    const posts = {"ping":"pong"}


    console.log(posts)
    return posts
  }
  static Pulldata()
  {
    return storage
  }
  static fetchProductById(productId) {}
}
module.exports = Store
