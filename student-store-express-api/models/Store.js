const { storage } = require("../data/storage")
const { BadRequestError } = require("../utils/errors")

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
  static async recordPurchase(user=null, shoppingCart=null) {

    // throw error if user or shoppingCart are missing
    const isInvalidCheckoutForm = (!user) || Object.keys(user).length != 2 || (!user.email) || (!user.name)
    const isMissingShoppingCart = (!shoppingCart) || shoppingCart.length === 0
    if (isInvalidCheckoutForm || isMissingShoppingCart) {
      throw new BadRequestError("Request requires both user fields and a non-empty shopping cart")
    }

    // throw error if there are any duplicate items in the shopping cart
    const itemIds = shoppingCart.map(item => {
      return item.itemId;
    });
    const uniqueItemIds = [...new Set(itemIds)]

    if (uniqueItemIds.length != shoppingCart.length) {
      throw new BadRequestError("There are duplicate items in the shopping cart")
    }

    // Start iterating over the shopping cart to make receipt and check for valid fields
    
    // initialize a receipt array
    let receiptList = []

    // get subtotal for the order
    let subtotal = 0
    for (let i = 0; i < shoppingCart.length; i++) {
      // check if shopping cart array has valid items
      let item = shoppingCart[i]
      if ("quantity" in item && "itemId" in item) {
        // get corresponding product item to get price
        const targetItem = await this.fetchProductById(item.itemId)
        let itemCost = parseFloat((targetItem.price * item.quantity).toFixed(2))
        subtotal += itemCost
        receiptList = [...receiptList, `${item.quantity} ${targetItem.name} purchased at a cost of $${targetItem.price.toFixed(2)} for a total cost of $${itemCost.toFixed(2)}`]
      } else {
        throw new BadRequestError("All shopping cart items should specify both item ID and quantity")
      }
    }
    
    const tax = parseFloat((subtotal * 0.0875).toFixed(2))
    const total = subtotal + tax

    // update receiptList
    receiptList = [...receiptList, `Before taxes, the subtotal was $${subtotal.toFixed(2)}`, 
                                   `After taxes and fees were applied, the total comes out to $${total.toFixed(2)}`]

    const purchases = await this.getPurchases()
    // create new purchase object to push to storage and to return as a reponse
    const newPurchase = {
      id: purchases.length + 1,
      name: user.name,
      email: user.email,
      order: shoppingCart,
      total: total,
      createdAt: new Date().toISOString(),
      receipt: receiptList
    }
    
    // add the new purchase to storage
    storage.get("purchases").push(newPurchase).write()
    return newPurchase
  }
}

module.exports = Store