const path = require("path")
const low = require("lowdb")
const fs = require("fs");

const FileSync = require("lowdb/adapters/FileSync")

class Storage {
  constructor() {
    this.path = path.resolve(__dirname, "db.json");
    this.setup();
    // this.data = fs.readFileSync("db.json", {encoding : "utf-8"})
  }

  async setup() {
    const adapter = new FileSync(this.path)
    this.db = low(adapter)
    this.db.defaults({ purchases: {}, products: {} }).write()
  }

  set(key, value) {
    return this.db.set(key, value)
  }

  get(key) {
    return this.db.get(key).value()
  }
}

module.exports = {
  storage: new Storage(),
}
