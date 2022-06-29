const { storage } = require("../data/storage.js")
const { BadRequestError } = require("../utils/errors");
// List all products currently in the db.json file

// Fetch a single product by its id
// Create a purchase order

function findProductsById(products, id) {
    if (typeof id === 'string') {
        return products.find((product) => product.id === id);
    }
}
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

class Store {
    static calcSubTotal(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += findProductsById(cart[i])?.price * cart[i].quantity
        }
        return total;

    }
    static calculateTaxes(subtotal) {
        let taxes = subtotal * 0.0875;
        return taxes;
    }
    static totalWithTax(subtotal) {
        let total = subtotal + (subtotal * 0.0875);
        console.log("total = ", total)
        return total;
    }
    static listProducts() {
        return storage.get("products");
    }
    static fetchProductById(productId) {
        let prods = this.listProducts();
        console.log(prods[productId - 1]);
        return prods[productId - 1];
    }
    // static createReceipt()

    static purchaseProducts(cart, userInfo) {
        if (!cart || !Object.keys(cart).length) {
            throw new BadRequestError('No cart or items in cart found to checkout');
        }
        if (!userInfo || !Object.keys(userInfo).length) {
            throw new BadRequestError('No user info to checkout with');

        }
        // const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index);
        // if (toFindDuplicates(cart) != null) {
        //     throw new BadRequestError('Duplicate items in the cart');git
        // }
        const products = storage.get('products');
        const subtotal = this.calcSubTotal(cart);
        console.log("subtotal")
        const total = this.totalWithTax(subtotal);
        // const receipt = this.createReceipt({
        //     cart, subtotal, total, products, userInfo
        // })
        const currentDate = new Date()
        const purchase = {
            id: products.length,
            name: userInfo.name,
            email: userInfo.email,
            order: cart,
            total: total,
            createdAt: currentDate.toString()
            // receipt,
        };
        storage.add('products', purchase)
        return purchase;
    }
}


module.exports = Store;
