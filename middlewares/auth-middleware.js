const jwt = require("jsonwebtoken");
const { UnAuthenticatedError } = require("../errors");
const utils = require("util");

const authMiddleware = async (req, res, next) => {
  const { jwt: token } = req.cookies;

  if (!token) {
    return res.redirect("/login");
  }

  const result = await utils.promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  if (!result) {
    return res.redirect("/login");
  }

  req.user = { ...result };

  next();
};

module.exports = authMiddleware;
