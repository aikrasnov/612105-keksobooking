class OfferAlreadyExistsError extends Error {

  constructor(offerBody, statusCode = 400) {
    const message = `offer already exist`;
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  OfferAlreadyExistsError
};
