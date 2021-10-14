/* eslint-disable no-underscore-dangle */
const express = require("express");
const upload = require("../../middleware/multer-upload-avatar");

const personRegisterController = require("../../controllers/subscriber");

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
