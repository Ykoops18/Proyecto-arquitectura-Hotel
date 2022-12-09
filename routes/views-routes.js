const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");

const viewController = require("../controllers/view-controller");

router.get("/", viewController.indexPage);
router.get("/login", viewController.loginPage);
router.get("/sign-up", viewController.signupPage);
router.get("/main", authMiddleware, viewController.mainPage);

module.exports = router;
