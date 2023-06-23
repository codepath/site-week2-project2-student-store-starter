class ExpressError extends Error {
    constructor(message, status) {
      super()
      this.message = message
      this.status = status
    }
  }
  
  class NotFoundError extends ExpressError {
    constructor(message = "Not Found") {
      super(message, 404)
    }
  }
  
  class BadRequestError extends ExpressError {
    constructor(message = "Bad Request") {
      super(message, 400)
    }
  }
  class ProductNotFoundError extends ExpressError{
    constructor(productID){
        super(`Product with ID: ${productID} Cannot Be Found`, 400)
    }
  }
  class PurchaseNotFoundError extends ExpressError{
    constructor(purchaseID){
        super(`Purchase with ID: ${productID} Cannot Be Found`, 400)
    }
  }
  class InvalidPurchaseError extends ExpressError{
    constructor(shoppingCart){
      super(`Shopping cart fields are missing or contain duplicate values. Cart: ${shoppingCart}` )
    }
  }
  module.exports = {
    ExpressError,
    NotFoundError,
    BadRequestError,
    ProductNotFoundError,
    PurchaseNotFoundError,
    InvalidPurchaseError,
    
  }