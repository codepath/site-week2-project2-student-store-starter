const { BadRequestError } = require("./Errors");
const fs = require("fs");

class Store {
  constructor(db) {
    this.db = db;
    this.id = 0;
  }

  getAllProducts() {
    return this.db;
  }

  fetchById(id) {
    // convert to int first
    const foundProduct = this.db.products.find(
      (product) => parseInt(product.id) === parseInt(id)
    );
    if (!foundProduct) {
      // throw an error or do something
      throw new BadRequestError("Product not found")
    } else {
      return { product: foundProduct };
    }
  }

  #containsDuplicates(shoppingCart) {
    const seenItems = new Set();
    let duplicate = false
    shoppingCart.forEach((item) => {
      if (seenItems.has(item.itemId)) {
        duplicate = true;
      }
      seenItems.add(item.itemId);
    });
    return duplicate;
  }

  #hasMissingFields(arrayObj, fields) {
    return arrayObj.some((obj) =>
      fields.some((field) => obj[field] === undefined)
    );
  }

  #findProduct(id) {
    let i = -1;
    this.db.products.forEach((currProduct, idx) => {
      if (currProduct.id === id) {
        i = idx;
      }
    });
    return i;
  }

  #getSubtotal(shoppingCart) {
    return shoppingCart.reduce(
      (subt, product) =>
        subt +
        this.db.products[this.#findProduct(product.itemId)]?.price *
          product?.quantity,
      0
    );
  }

  #generateReceipt(purchase) {
    let receipt = `Receipt for purchases by ${purchase.name}: ${"\n"}`;
    let subtotal = this.#getSubtotal(purchase.order);
    purchase.order.forEach((item) => {
      let index = this.#findProduct(item.itemId);
      const product = this.db.products[index];
      receipt += `${item?.quantity} ${product?.name} at a unit price of $${
        product?.price
      } for a total of $${item?.quantity * product?.price} \n`;
    });

    receipt += `Subtotal: \t\t $${subtotal.toFixed(2)}\n`;
    receipt += `Taxes: \t\t $${(subtotal * 0.0875).toFixed(2)}\n`;
    receipt += `Total: \t\t $${purchase.total}`;
    return receipt;
  }

  createOrder(shoppingCart, user) {
    // shoppingCar : [{itemId, quantity}]
    // user: {name, email}

    // if either arguement is missing
    if (shoppingCart === undefined || user === undefined) {
      throw new BadRequestError(
        "Shopping Cart and User Info must be present"
      );
    }

    // if there are duplicates
    if (this.#containsDuplicates(shoppingCart)) {
      throw new BadRequestError("Shopping Cart contains duplicates");
    }

    // if there are missing fields in the shopping cart or user info
    if (
      this.#hasMissingFields(shoppingCart, ["itemId", "quantity"]) ||
      this.#hasMissingFields([user], ["name", "email"])
    ) {
      throw new BadRequestError(
        "Missing Checkout fields"
      );
    }

    if(user.name.length === 0 || user.email.length === 0) {
        throw new BadRequestError("User Info must include name and email")
    }

    const subTotal = this.#getSubtotal(shoppingCart);
    const purchase = {
      id: this.id++,
      name: user.name,
      email: user.email,
      order: shoppingCart,
      total: (subTotal + (8.75 / 100) * subTotal).toFixed(2),
      createdAt: Date(),
    };

    purchase.receipt = this.#generateReceipt(purchase);

    // add to the data base file
    // add purchases filed if it isnt present
    if (!("purchases" in this.db)) {
      this.db.purchases = [];
    }
    this.db.purchases.push(purchase);
    // TODO
    // fs.writeFile("../student-store-express-api/data/db.json", JSON.stringify(this.db, null, 4), error =>{if(error){console.error(error)}})
    return purchase;
  }
}

module.exports = Store;
