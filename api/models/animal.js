const mongoose = require("mongoose");

const animalsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  character: {
    type: String,
    required: true,
  },
  dateBirth: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  webSite: {
    type: String,
    required: true,
  },
  describeAnimal: {
    type: String,
    required: true,
  },
  pictures: [
    {
      picture: { data: String, contentType: String },
      isPrincipal: { type: String, default: false },
      fieldname: String,
    },
  ],
  registerDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updateDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Animal", animalsSchema);
