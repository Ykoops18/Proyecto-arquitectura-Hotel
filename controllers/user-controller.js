const { StatusCodes } = require("http-status-codes");
const UserService = require("../services/user-services");

const getAllUsers = async (req, res) => {
  const users = await UserService.returnAllUsers();

  res.status(StatusCodes.OK).json({
    data: users,
    results: users.length,
    sucess: true,
  });
};

const getUser = async (req, res) => {
  const { id } = req.params;

  const user = await UserService.returnSingleUser(id);

  res.status(StatusCodes.OK).json({
    data: user,
    sucess: "true",
  });
};

const addUser = async (req, res) => {
  const user = await UserService.createUser({ ...req.body });

  res.status(StatusCodes.CREATED).json({
    data: user,
    sucess: "true",
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  const newUser = await UserService.updateUser(id, { ...req.body });

  res.status(StatusCodes.ACCEPTED).json({
    data: newUser,
    sucess: "true",
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const userDeleted = await UserService.deleteUser(id);

  res.status(StatusCodes.ACCEPTED).json({
    data: userDeleted,
    sucess: "true",
  });
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
