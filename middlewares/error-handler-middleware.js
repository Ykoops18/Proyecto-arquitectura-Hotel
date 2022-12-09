const { StatusCodes } = require("http-status-codes");
const { BadRequestError, ServerError } = require("../errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  let error = {
    message: err.message || "Something went wrong, try again later",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  switch (true) {
    case err.code && err.code === 11000:
      error = new BadRequestError(
        `${Object.values(err.keyValue)} must be unique`
      );
      break;

    case err.name && err.name === "ValidationError":
      error = new BadRequestError(
        `${Object.keys(err.errors)
          .map((error) => err.errors[error].message)
          .join(", ")}`
      );
      break;

    case err.name && err.name === "CastError":
      error = new BadRequestError(
        "Invalid request, please provide correct data"
      );
      break;
  }

  res.status(error.statusCode).json({
    message: error.message,
    success: "false",
    err,
  });
};

module.exports = errorHandlerMiddleware;
