require("express-async-errors");

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

const errorHandlerMiddleware = require("./middlewares/error-handler-middleware");
const notFoundMiddleware = require("./middlewares/not-found-middleware");

const userRouter = require("./routes/user-routes");
const hotelRouter = require("./routes/hotel-routes");
const authRouter = require("./routes/auth-routes");
const viewRouter = require("./routes/views-routes");

app.use(express.static("./public"));

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/v1/hotel", hotelRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/", viewRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
