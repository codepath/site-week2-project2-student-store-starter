const {storage} = require("../data/storage")

class store {
  static async listProducts() {
    //list all items in products array
    const products = storage.get("products").value()
    return products
  }

  static async fetchProductsId(productsId){
    //fetch a single transaction
    const products = storage
        .get("products")
        .find({id: Number(productsId)})
        .value()
        return products
  }

  static async listPurchases() {
    //list all items in products array
    const purchases = storage.get("purchases").value()
    return purchases
  }



}

module.exports = store