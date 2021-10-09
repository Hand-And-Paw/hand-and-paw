/* eslint-disable no-underscore-dangle */
const express = require("express");
const multer = require("multer");

const storage = require("../middleware/multer-upload-avatar");

const upload = multer({ storage });
const personRegisterController = require("../controllers/person-subscription");

const personRegister = express.Router();

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
