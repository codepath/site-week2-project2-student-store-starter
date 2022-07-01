class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

class BadRequestError extends ExpressError {
  constructor(message) {
    super(message || 'Bad Request', 400);
  }
}

class NotFoundError extends ExpressError {
  constructor(message) {
    super(message || 'Not Found', 404);
  }
}

module.exports = {
  ExpressError,
  BadRequestError,
  NotFoundError,
};
