const mongoose = require("mongoose");
const validator = require("validator");

const subscribersSchema = new mongoose.Schema({
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
  subscribeDate: {
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
    type: String,
  },
  favorites: [String],
  publicAccess: {
    monday: {
      access: Boolean,
      hours: String,
    },
    tuesday: {
      access: Boolean,
      hours: String,
    },
    wednesday: {
      access: Boolean,
      hours: String,
    },
    thursday: {
      access: Boolean,
      hours: String,
    },
    friday: {
      access: Boolean,
      hours: String,
    },
    saturday: {
      access: Boolean,
      hours: String,
    },
    sunday: {
      access: Boolean,
      hours: String,
    },
  },
  publishPet: [String],
});

module.exports = mongoose.model("Subscriber", subscribersSchema);
