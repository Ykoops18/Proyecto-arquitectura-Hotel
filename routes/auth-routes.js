const express = require("express");
const authController = require("../controllers/auth-controller");

const router = express.Router();

router.route("/login").post(authController.login);
router.route("/sign-up").post(authController.sign_up);
router.route("/log-out").get(authController.logOut);

module.exports = router;
