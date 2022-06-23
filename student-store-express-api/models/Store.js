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

  // list exsting purchases
  static async getPurchases() {
    const purchases = storage.get("purchases").value()
    return purchases
  }

  // create a new purchase order
  static async recordPurchase(user, shoppingCart) {
    if ((!user) || (!shoppingCart)) {
      throw new Error("Request requires both user fields and a non-empty shopping cart")
    }

    // get subtotal for the order
    let subtotal = 0
    for (let i = 0; i < order.length; i++) {
      // check if shopping cart array has valid items
      let item = order[i]
      if ("quantity" in item && "itemId" in item) {
        // get corresponding product item to get price
        const targetItem = await this.fetchProductById(item.itemId)
        subtotal += (targetItem.price * item.quantity).toFixed(2)
      } else {
        throw new Error("Request requires all shopping cart items to specify both item ID and quantity")
      }
    }
    
    const tax = subtotal * 0.0875
    const total = subtotal + tax

    const purchases = await this.getPurchases()
    
    // create new purchase object to push to storage and to return as a reponse
    const newPurchase = {
      id: purchases.length + 1,
      name: user.name,
      email: user.email,
      order: shoppingCart,
      total: total,
      createdAt: new Date().toISOString()
    }
    
    // add the new purchase to storage
    storage.get("purchases").push(newPurchase).write()
    return newPurchase
  }
}

module.exports = Store