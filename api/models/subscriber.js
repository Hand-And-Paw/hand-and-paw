const mongoose = require("mongoose");

const subscribersSchema = new mongoose.Schema({
  personName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updateDate: {
    type: Date,
    default: null,
  },
  surname: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  animalForAdoption: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Subscriber", subscribersSchema);
