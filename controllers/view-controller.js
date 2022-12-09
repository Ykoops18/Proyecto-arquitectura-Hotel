const { StatusCodes } = require("http-status-codes");

const indexPage = (req, res) => {
  res.status(StatusCodes.OK).render("../views/pages/index.ejs");
};

const loginPage = (req, res) => {
  res.status(StatusCodes.OK).render("../views/pages/login.ejs");
};

const signupPage = (req, res) => {
  res.status(StatusCodes.OK).render("../views/pages/sign-up.ejs");
};

const mainPage = (req, res) => {
  res.status(StatusCodes.OK).render("../views/pages/main.ejs");
};

const favoritesPage = (req, res) => {
  res.status(StatusCodes.OK).render("../views/pages/favorites.ejs");
};

const hotelPage = (req, res) => {
  res.status(StatusCodes.OK).render("../views/pages/hotel.ejs");
};

module.exports = {
  indexPage,
  loginPage,
  signupPage,
  mainPage,
  favoritesPage,
  hotelPage,
};
