const {storage} = require("../data/storage")

class store {
  static async listProducts() {
    //list all items in products array
    const products = storage.get("products").value()
    return products
  }

  static async fetchProductsId(productsId){
    //fetch a single transaction
    const product = storage
        .get("products")
        .find({id: Number(productsId)})
        .value()
        return product
  }

  static async listPurchases() {
    //list all items in products array
    const purchases = storage.get("purchases").value()
    return purchases
  }

  // static async createOrder(order) {
  //   const newOrder = {...order}
  //   storage.get("purchases").push(newOrder).write()
  //   return newOrder
  // }

}








module.exports = store