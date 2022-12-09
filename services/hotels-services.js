const { NotFoundError } = require("../errors");
const HotelModel = require("../models/hotel-model");

class HotelService {
  async returnAllHotels() {
    const hotels = await HotelModel.find();

    return hotels;
  }

  async returnHotel(id) {
    const hotel = await HotelModel.findById(id);

    if (!hotel) {
      throw new NotFoundError("Hotel was not found");
    }

    return hotel;
  }

  async createHotel(hotelData) {
    const newHotel = await HotelModel.create({ ...hotelData });

    return newHotel;
  }

  async updateHotel(id, newHotelData) {
    const hotelUpdated = await HotelModel.findByIdAndUpdate(
      id,
      { ...newHotelData },
      { new: true, runValidators: true }
    );

    if (!hotelUpdated) {
      throw new NotFoundError("Hotel was not found");
    }

    return hotelUpdated;
  }

  async removeHotel(id) {
    const hotelRemoved = await HotelModel.findByIdAndRemove(id);

    if (!hotelRemoved) {
      throw new NotFoundError("Hotel was not found");
    }

    return hotelRemoved;
  }
}

module.exports = new HotelService();
