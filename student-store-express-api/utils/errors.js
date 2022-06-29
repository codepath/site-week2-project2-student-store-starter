class ExpressError extends Error {

	constructor(message, status) {
		super();
		this.message = message;
		this.status = status;
	}
}

class BadRequestError extends ExpressError {

	constructor(message='Bad request error', status=400) {
		super(message, status);
	}
}

module.exports = BadRequestError;
