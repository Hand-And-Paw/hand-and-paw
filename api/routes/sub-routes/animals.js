const express = require("express");

const animalRoute = express.Router();
const animalController = require("../../controllers/animals");
const uploadAnimalPictures = require("../../middleware/multer-upload-animal-pictures");
const upload = require("../../middleware/multer-upload-one-animal-picture");
const tokenChecker = require("../../middleware/token-login");

// all animals
animalRoute.get("/", animalController.getAllAnimals);
// filter animals
animalRoute.post("/filter-animals", animalController.filterAnimals);
// get one animal
animalRoute.get("/:id", animalController.getAnimal);

animalRoute.use((req, res, next) => {
  tokenChecker(req, res, next);
});

animalRoute.post(
  "/register",
  uploadAnimalPictures,
  animalController.postAnimal
);
// update existing pictures and data
animalRoute.put(
  "/update/:id",
  uploadAnimalPictures,
  animalController.updateAnimal
);
animalRoute.delete("/delete/:id", animalController.deleteAnimal);
// update one picture
animalRoute.patch(
  "/update-picture/:animalId",
  upload.single("animal-picture"),
  animalController.updateOnePictureAnimal
);
// delete one picture
animalRoute.patch(
  "/delete-picture/:animalId",
  animalController.deleteOnePictureAnimal
);
// upload pictures
animalRoute.patch(
  "/upload-pictures/:animalId",
  uploadAnimalPictures,
  animalController.uploadPictures
);

// update the isPrincipal properties
animalRoute.patch(
  "/update-isPrincipal/:animalId",
  animalController.updatePrincipalPicture
);

module.exports = animalRoute;
