/* eslint-disable no-underscore-dangle */
const express = require("express");
const path = require("path");

const upload = require("../../middleware/multer-upload-avatar");
const userController = require("../../controllers/users");
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

const userRoute = express.Router();

userRoute.post("/register", upload.single(""), userController.postUser);

userRoute.use((req, res, next) => {
  tokenChecker(req, res, next);
});

userRoute.use("/uploads", express.static(uploadAvatarPath));
userRoute.get("/", userController.getAllUsers);
userRoute.patch("/delete-animal/:id", userController.deletePublishedAnimal);
userRoute.get("/:id", userController.getUser);
userRoute.put(
  "/update/:id",
  upload.single("avatar"),
  userController.updateUser
);
userRoute.delete("/delete/:id", userController.deleteUser);
userRoute.patch("/add-favorite/:id", userController.addFavorite);
userRoute.patch("/remove-favorite/:id", userController.removeFavorite);

module.exports = userRoute;
