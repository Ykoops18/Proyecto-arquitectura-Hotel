const express = require("express");
const hotelController = require("../controllers/hotel-controller");
const authMiddleware = require("./../middlewares/auth-middleware");

const router = express.Router();

router
  .route("/")
  .get(hotelController.getAllHotels)
  .post(hotelController.addHotel);

router
  .route("/:id")
  .get(hotelController.getHotel)
  .patch(hotelController.updateHotel)
  .delete(hotelController.deleteHotel);

module.exports = router;
