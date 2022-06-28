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

  static async createPurchase(user, shoppingCart) {
    if(!shoppingCart || !user.name || !user.email){
        throw new BadRequestError("Invalid request, user or shoppingCart missing")
    }
    let total = 0;
    const products = await Store.listProducts();
    const purchases = await Store.listPurchases();
    const purchaseId = purchases.length + 1;
    const createdAt = new Date().toISOString();
    shoppingCart.forEach((item) => {
        if(!item.id || !item.quantity){
            throw new BadRequestError("Invalid request, item id or quantity missing")
        }
        const productDetails = products.find(product => product.id === item.id);
        total += productDetails.price * item.quantity
    })
    //calculate total cost, add tax, create new purchase object
    total += total*0.0875;
    let newPurchase = {id: purchaseId, name: user.name, email: user.email, order: shoppingCart, total: total, createdAt: createdAt};
    storage.get("purchases").push(newPurchase);
    return newPurchase;
}

}

module.exports = store