const APIError = require("./api-error");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends APIError {
  constructor(msg) {
    super(msg);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
