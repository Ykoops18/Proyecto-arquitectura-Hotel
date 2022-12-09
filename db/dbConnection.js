const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((conn) => console.log("DB connected..."))
  .catch((err) => console.log("API can not connect to the DB"));
