const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updateDate: {
    type: Date,
  },
  phone: {
    type: String,
    validate: {
      validator: validator.isMobilePhone,
      message: "{VALUE} is not a valid phone",
      isAsync: false,
    },
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  avatar: {
    data: String,
    contentType: String,
  },
  favorites: [String],
  publicAccess: {
    monday: {
      access: String,
      hours: String,
    },
    tuesday: {
      access: String,
      hours: String,
    },
    wednesday: {
      access: String,
      hours: String,
    },
    thursday: {
      access: String,
      hours: String,
    },
    friday: {
      access: String,
      hours: String,
    },
    saturday: {
      access: String,
      hours: String,
    },
    sunday: {
      access: String,
      hours: String,
    },
  },
  registeredAnimals: [String],
});

module.exports = mongoose.model("Users", userSchema);
