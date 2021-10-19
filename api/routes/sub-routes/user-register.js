/* eslint-disable no-underscore-dangle */
const express = require("express");
const path = require("path");

const upload = require("../../middleware/multer-upload-avatar");
const userRegisterController = require("../../controllers/user-register");
const tokenChecker = require("../../middleware/token-login");

const uploadAvatarPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "client",
  "public",
  "avatar-uploads"
);

const userRegister = express.Router();

userRegister.post("/", userRegisterController.postUser);

userRegister.use((req, res, next) => {
  tokenChecker(req, res, next);
});

userRegister.use("/uploads", express.static(uploadAvatarPath));
userRegister.get("/", userRegisterController.getAllUsers);
userRegister.get("/:id", userRegisterController.getUser);
userRegister.put(
  "/:id",
  upload.single("avatar"),
  userRegisterController.updateUser
);
userRegister.delete("/:id", userRegisterController.deleteUser);

module.exports = userRegister;
