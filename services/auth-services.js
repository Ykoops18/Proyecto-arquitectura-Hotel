const { BadRequestError, NotFoundError } = require("../errors");
const UserModel = require("../models/user-model");
const bcrypt = require("bcryptjs");

class AuthService {
  async login({ email, password }) {
    if (!email || !password) {
      throw new BadRequestError("Please provide email and password");
    }

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      throw new NotFoundError("Email was not found");
    }

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      throw new BadRequestError("Incorrect Password");
    }

    return user;
  }

  async signUp(userData) {
    const newUser = await UserModel.create({ ...userData });

    return newUser;
  }
}

module.exports = new AuthService();
