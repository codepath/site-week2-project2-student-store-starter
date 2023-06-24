const { storage } = require("../data/storage");

// class Store {
//    static for get all products
//   static findAll(){
//     return storage.get("products")
//   }
//  static method for get individual product by id

// }

//function to get all products
const findAll = () => {
  return storage.get("products");
};

//function to get individual product
const findOne = (oneId) => {
  return storage.get(`products.${oneId - 1}`);
};

module.exports = {
  findAll,
  findOne,
};
