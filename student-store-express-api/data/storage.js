const path = require("path")
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

class Storage {
  constructor() {
    this.path = path.resolve(__dirname, "db.json")
    this.setup()
  }

  async setup() {
    const adapter = new FileSync(this.path)
    this.db = low(adapter)
    this.db.defaults({ purchases: [], products: [] }).write()
  }

  set(key, value) {
    return this.db.set(key, value)
  }

  get(key) {
    return this.db.get(key)
  }
}

module.exports = {
  storage: new Storage(),
}
