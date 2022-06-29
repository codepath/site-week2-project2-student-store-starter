const {storage} = require('../data/storage');

class Store {
	constructor () {

	}

	static get_products() {
		return storage.get('products').value();
	}

	static get_product(id) {
		return this.get_products().find((prod) => prod.id === id);
	}

	static get_purchases() {
		return storage.get('purchases').value();
	}

	static add_purchase(purchase) {
		storage.get('purchases').push(purchase);
	}
}

module.exports = Store;
