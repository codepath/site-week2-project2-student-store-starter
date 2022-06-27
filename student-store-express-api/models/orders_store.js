const { storage } = require("../data/storage");
class Orders {
  static async listOrders()
  {
    const orders = storage.get("purchases")
    return orders
  } 

  static async fetchOrdersById(id)
  {
    const order = storage.get("purchases"["shoppingCart"]).find({ id: Number(id) }).value()
    return order
  }
}
module.exports = Orders

///
//  static async listOrders()
//   {
//     const orders = storage.get("purchases")
//     return orders
//   }

//   static async fetchOrdersById(id)
//   {
//     const order = storage.get("purchases").find({ id: Number(id) }).value()
//     return order
//   }
