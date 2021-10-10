/* eslint-disable no-underscore-dangle */
const express = require("express");
const multer = require("multer");

const storageAvatar = require("../middleware/multer-upload-avatar");
const personRegisterController = require("../controllers/person-subscription");

const personRegister = express.Router();
const imageFilter = (req, file, callback) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({
  storage: storageAvatar,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: imageFilter,
});

personRegister.get("/", personRegisterController.getAllUsers);
personRegister.get("/:id", personRegisterController.getUser);
personRegister.put(
  "/:id",
  upload.single("avatar"),
  personRegisterController.updateUser
);
personRegister.delete("/:id", personRegisterController.deleteUser);
personRegister.post("/", personRegisterController.postUser);

module.exports = personRegister;
