const express = require("express");
const userController = require("../controllers/user-controller");
const authMiddleware = require("./../middlewares/auth-middleware");

const router = express.Router();

router.route("/").get(userController.getAllUsers).post(userController.addUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
