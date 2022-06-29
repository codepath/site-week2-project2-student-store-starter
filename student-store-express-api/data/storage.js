/* eslint-disable require-jsdoc */
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

class Storage {
	constructor() {
		this.path = path.resolve(__dirname, 'db.json'); // path to json with data
		this.setup();
	}

	async setup() {
		// tell lowdb to use file at the provided path as database
		const adapter = new FileSync(this.path);
		this.db = low(adapter);
		// tell lowdb the json structure it should expect
		this.db.defaults({purchases: [], products: []}).write();
	}

	set(key, value) {
		return this.db.set(key, value);
	}

	get(key) {
		return this.db.get(key);
	}
}

module.exports = {
	storage: new Storage(),
};
