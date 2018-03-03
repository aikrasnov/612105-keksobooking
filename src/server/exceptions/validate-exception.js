class ValidateException extends Error {

  constructor(message, errors, statusCode = 400) {
    super(message);
    this.errors = errors;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  ValidateException
};
