const ForbiddenError = require("../errors/forbidden-error");

const routeAccessAllowedFor = (...usersAllowedAccess) => {
  return async (req, res, next) => {
    if (usersAllowedAccess.includes(req.role)) {
      next();
    } else {
      throw new ForbiddenError(
        "You do not have permission to access this resource"
      );
    }
  };
};

module.exports = routeAccessAllowedFor;
