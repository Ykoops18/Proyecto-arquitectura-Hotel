const { StatusCodes } = require("http-status-codes");

const notFoundMiddleware = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    message: "Resource not found",
    sucess: "false",
  });
};

module.exports = notFoundMiddleware;
