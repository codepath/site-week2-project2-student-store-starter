const {storage} = require("../data/storage")



class Store { 

    // fetches all products from db.jason
    static async listAllProducts() {
        const listOfProducts = storage.get("products").orderBy("id", "desc");
        return listOfProducts
    }


    // fetch single product by ID
    static async getProductFromId(productId) {
        const matchingProduct = storage.get("products").find({id: Number(productId)}).value();
        return matchingProduct
    }


    

}

    




module.exports = Store