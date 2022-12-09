const { StatusCodes } = require("http-status-codes");
const HotelService = require("../services/hotels-services");

const getAllHotels = async (req, res) => {
  const hotels = await HotelService.returnAllHotels();

  res.status(StatusCodes.OK).json({
    data: hotels,
    results: hotels.length,
    sucess: "true",
  });
};

const getHotel = async (req, res) => {
  const { id } = req.params;

  const hotel = await HotelService.returnHotel(id);

  res.status(StatusCodes.OK).json({
    data: hotel,
    sucess: "true",
  });
};

const addHotel = async (req, res) => {
  const newHotel = await HotelService.createHotel({ ...req.body });

  res.status(StatusCodes.CREATED).json({
    data: newHotel,
    sucess: "true",
  });
};

const updateHotel = async (req, res) => {
  const { id } = req.params;

  const hotelUpdated = await HotelService.updateHotel(id, { ...req.body });

  res.status(StatusCodes.ACCEPTED).json({
    data: hotelUpdated,
    sucess: "true",
  });
};

const deleteHotel = async (req, res) => {
  const { id } = req.params;

  const hotelDeleted = await HotelService.removeHotel(id);

  res.status(StatusCodes.ACCEPTED).json({
    data: hotelDeleted,
    sucess: "true",
  });
};

module.exports = {
  getAllHotels,
  getHotel,
  updateHotel,
  addHotel,
  deleteHotel,
};
