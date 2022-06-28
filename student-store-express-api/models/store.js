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

  static purchaseOrder(purchase) {
    console.log("purchase", purchase);

    if (!purchase) {
        throw new Error("No purchase sent");
    }

    let subTotal = 0;
    let total = 0;
    let user = purchase.user;
    let shoppingCart = purchase.shoppingCart;
    const requiredFields = ["user", "shoppingCart"];
    const requiredFields2ElectricBoogaloo = ["name", "email"];
    const requiredFields3TheSqueakquel = ["itemId", "quantity"];

    requiredFields.forEach((field) => {
        if (!purchase[field] && purchase[field] !== 0) {
            throw new BadRequestError(
                "Field: " + { field } + " is required in purchase"
            );
        }
    });

    requiredFields2ElectricBoogaloo.forEach((field) => {
        if (!user[field] && user[field] == "") {
            throw new BadRequestError(
                "User field: " + field + " is required in purchase"
            );
        }
    });

    for (let i = 0; i < shoppingCart.length; i++) {
        requiredFields3TheSqueakquel.forEach((field) => {
            if (!shoppingCart[i][field] && shoppingCart[i][field] !== 0) {
                throw new BadRequestError(
                    "Shopping Cart field: " + { field } + " is required in purchase"
                );
            }
        });

        let unitPrice = store.singleProductPrice(shoppingCart[i].itemId);
        let subPrice = unitPrice * shoppingCart[i].quantity;
        subTotal += subPrice;
    }

    total = subTotal + subTotal * 0.0875;

    const purchases = store.listPurchases();
    const purchaseId = purchases.length + 1;
    const createdAt = new Date().toISOString();

    const newPurchase = {
        id: purchaseId,
        createdAt: createdAt,
        name: user.name,
        email: user.email,
        total: total.toFixed(2),
        order: purchase.shoppingCart,
    };

    storage.get("purchases").push(newPurchase).write();
    shoppingCart = [];
}

}

module.exports = store