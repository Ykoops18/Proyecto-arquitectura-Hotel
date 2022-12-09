const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a Name"],
    minLength: [3, "Name must have at least 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: [true, "Email must be unique"],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: "{VALUE} is not a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: [6, "Password must be at least 6 characters long"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
    required: [true, "Please provide a new role"],
    enum: {
      values: ["user", "admin"],
      message: "{VALUE} is invalid",
    },
  },
  hotels: {
    type: [mongoose.Types.ObjectId],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
