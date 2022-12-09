const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_DURATION,
  });
};

module.exports = createToken;
