class ExpressError extends Error {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}

class BadRequestError extends ExpressError {
    constructor(message) {
        this.message = message == null ? "Bad request" : message
        this.status = 400
    }
}

class NotFoundError extends ExpressError {
    constructor(message) {
        this.message = message == null ? "Not found" : message
        this.status = 404
    }
}

module.exports.ExpressError = ExpressError 
module.exports.NotFoundError = NotFoundError
module.exports.BadRequestError = BadRequestError