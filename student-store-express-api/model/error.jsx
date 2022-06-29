class ExpressError extends Error {
  constructor(message, status) {
    super()
    this.message = message
    this.status = status
  }
}

class BadRequestError extends ExpressError{
    constructor(message = "Bad Request") {
      super(message, 400);
    }
  }

  module.exports = {
    BadRequestError, 
    ExpressError
  }