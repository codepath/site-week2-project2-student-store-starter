const {
  BadRequestError
} = require("../utils/errors");
const {
  storage
} = require("../data/storage");
const createApplication = require("express/lib/express");
const {TAX_PERCENTAGE} = require("../constants.js")
class Store {
  static async createPurchase(user, order) {
    // costs initialization
    let subtotal = 0;
    let tax = 0;
    let total = 0;

    //error handling

    // check if fields exist
    if ((!user.name) || (!user.email) || (!order)) {
      throw new BadRequestError("user name/email missing");
    }

    // sort order and check for duplicates
    order = order.sort((a, b) => a.itemId - b.itemId);

    // check for duplicates
    for (let i = 0; i < order.length; i++) {
      if (i != order.length - 1) {
        if (order[i].itemId === order[i + 1].itemId) {
          throw new BadRequestError("There are duplicate items in shoppingCart!!");
        }
      }
    }

    // get all products to retrieve prices
    const allProducts = await this.getProducts();
    // get all purchases to retrieve our new id
    const purchases = await this.getPurchases();
    
    // get id
    const id = purchases.value().length + 1;

    // subtotal price gets calculated
    order.map((item) => {
      let product = allProducts.find({id:item.itemId}).value();
      subtotal += product.price * item.quantity;
    });

    // tax cost calculation
    tax = subtotal * TAX_PERCENTAGE;
    console.log("subtotal 2:", subtotal);
    // total cost calculation
    total = subtotal + tax;
    console.log("total:",total);

    // get timestamp
    const createdAt = new Date().toISOString()

    // create message based on calculated data
    const message = {
      title: `Order #${id}`,
      body: `Receipt for ${user.name} available at ${user.email} for a total of $${total.toFixed(2)}`
    }

    // object to be sent containing all calculated fields
    const newPurchase = {
      id,
      user,
      order,
      total,
      createdAt,
      message
    };

    //write to db.json
    storage.get("purchases").push(newPurchase).write();

    //return object
    return newPurchase;
  }

  static async getProducts() {
    //get all products
    const products = storage.get("products").orderBy("id", "asc");
    return products;
  }

  static async fetchProduct(productId) {
    //get single product by ID
    const product = storage.get("products").find({
      id: Number(productId)
    }).value();
    return product
  }

  static async getPurchases() {
    const purchases = storage.get("purchases").orderBy("createdAt", "desc");
    return purchases
  }

  static async fetchPurchase(purchaseId) {
    const purchase = storage.get("purchases").find({
      id: Number(purchaseId)
    }).value();
    return purchase
  }
}

module.exports = Store;