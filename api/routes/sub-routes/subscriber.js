/* eslint-disable no-underscore-dangle */
const express = require("express");
const path = require("path");

const upload = require("../../middleware/multer-upload-avatar");
const personRegisterController = require("../../controllers/subscriber");
// const tokenChecker = require("../../middleware/token-login");

const uploadAvatarPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "client",
  "public",
  "avatar-uploads"
);

const personRegister = express.Router();

personRegister.post("/", personRegisterController.postUser);

// personRegister.use((req, res, next) => {
//   tokenChecker(req, res, next);
// });

personRegister.use("/uploads", express.static(uploadAvatarPath));
personRegister.get("/", personRegisterController.getAllUsers);
personRegister.get("/:id", personRegisterController.getUser);
personRegister.put(
  "/:id",
  upload.single("avatar"),
  personRegisterController.updateUser
);
personRegister.delete("/:id", personRegisterController.deleteUser);

module.exports = personRegister;
