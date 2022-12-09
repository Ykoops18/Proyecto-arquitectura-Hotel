const APIError = require("./api-error");
const BadRequestError = require("./bad-request-error");
const NotFoundError = require("./not-found-error");
const UnAuthenticatedError = require("./unauthenticated-error");
const FordibbenError = require("./forbidden-error");

module.exports = {
  APIError,
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
  FordibbenError,
};
