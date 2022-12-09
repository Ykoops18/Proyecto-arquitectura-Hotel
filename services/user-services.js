const { NotFoundError } = require("../errors");
const UserModel = require("../models/user-model");

class UserService {
  async returnAllUsers() {
    const users = await UserModel.find();

    return users;
  }

  async returnSingleUser(id) {
    const user = await UserModel.findById(id);

    if (!user) {
      throw new NotFoundError("User was not found");
    }

    return user;
  }

  async createUser(userData) {
    const newUser = await UserModel.create({ ...userData });

    return newUser;
  }

  async updateUser(id, newUserData) {
    const userUpdated = await UserModel.findByIdAndUpdate(
      id,
      { ...newUserData },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!userUpdated) {
      throw new NotFoundError("User was not found");
    }

    return userUpdated;
  }

  async deleteUser(id) {
    const userDeleted = await UserModel.findByIdAndRemove(id);

    if (!userDeleted) {
      throw new NotFoundError("User was not found");
    }

    return userDeleted;
  }
}

module.exports = new UserService();
