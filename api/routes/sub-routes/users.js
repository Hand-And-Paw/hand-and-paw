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

// userRoute.use((req, res, next) => {
//   tokenChecker(req, res, next);
// });

userRoute.use("/uploads", express.static(uploadAvatarPath));
userRoute.get("/", tokenChecker, userController.getAllUsers);
userRoute.patch(
  "/delete-animal/:id",
  tokenChecker,
  userController.deletePublishedAnimal
);
userRoute.get("/:id", tokenChecker, userController.getUser);
userRoute.put(
  "/update/:id",
  upload.single("avatar"),
  tokenChecker,
  userController.updateUser
);
userRoute.delete("/delete/:id", tokenChecker, userController.deleteUser);
userRoute.patch("/add-favorite/:id", tokenChecker, userController.addFavorite);
userRoute.patch(
  "/remove-favorite/:id",
  tokenChecker,
  userController.removeFavorite
);

module.exports = userRoute;
