const express = require("express");

const publishAnimalRoute = express.Router();
const publishAnimalController = require("../../controllers/publish-animal");
const uploadAnimalPictures = require("../../middleware/multer-upload-animal-pictures");
const upload = require("../../middleware/multer-upload-one-animal-picture");

publishAnimalRoute.post(
  "/",
  uploadAnimalPictures,
  publishAnimalController.postAnimal
);
publishAnimalRoute.get("/", publishAnimalController.getAllAnimals);
publishAnimalRoute.get("/:id", publishAnimalController.getAnimal);
// update existing pictures and data
publishAnimalRoute.put(
  "/:id",
  uploadAnimalPictures,
  publishAnimalController.updateAnimal
);
publishAnimalRoute.delete("/:id", publishAnimalController.deleteAnimal);
// update one picture
publishAnimalRoute.patch(
  "/picture/:animalId",
  upload.single("animal-picture"),
  publishAnimalController.updateOnePictureAnimal
);
// delete one picture
publishAnimalRoute.patch(
  "/delete-picture/:animalId",
  publishAnimalController.deleteOnePictureAnimal
);
// upload pictures
publishAnimalRoute.patch(
  "/upload-pictures/:animalId",
  uploadAnimalPictures,
  publishAnimalController.uploadPictures
);

// update the isPrincipal properties
publishAnimalRoute.patch(
  "/is-principal/:animalId",
  publishAnimalController.updatePrincipalPicture
);

module.exports = publishAnimalRoute;
