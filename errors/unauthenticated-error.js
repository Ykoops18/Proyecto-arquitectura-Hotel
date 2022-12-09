const APIError = require("./api-error");
const { StatusCodes } = require("http-status-codes");

class UnAuthenticatedError extends APIError {
  constructor(msg) {
    super(msg);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnAuthenticatedError;
