const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "Name of hotel must be unique"],
    minLength: [3, "Name of gitel must be at least 3 characters long"],
  },
  cost: {
    type: Number,
    required: [true, "Cost of hotel is required"],
  },
  description: String,
});

const HotelModel = mongoose.model("Hotel", hotelSchema);

module.exports = HotelModel;
