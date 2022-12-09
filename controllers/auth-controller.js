const { StatusCodes } = require("http-status-codes");
const AuthService = require("../services/auth-services");
const createToken = require("../utils/createToken");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await AuthService.login({ email, password });

  const token = createToken({ name: user.name, id: user._id });

  res
    .cookie("jwt", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
    })
    .status(StatusCodes.ACCEPTED)
    .json({
      logged: "User was founded",
      success: "true",
    });
};

const sign_up = async (req, res) => {
  const newUser = await AuthService.signUp({ ...req.body });

  delete newUser.password;

  const token = createToken({ name: user.name, id: user._id });

  res
    .cookie("jwt", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
    })
    .status(StatusCodes.ACCEPTED)
    .json({
      logged: newUser,
      success: "true",
    });
};

const logOut = (req, res) => {
  res
    .cookie("jwt", "", {
      httpOnly: true,
      maxAge: 1,
    })
    .status(StatusCodes.ACCEPTED)
    .redirect("/login");
};

module.exports = { login, sign_up, logOut };
