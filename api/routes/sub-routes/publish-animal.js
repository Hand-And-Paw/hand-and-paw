const express = require("express");

const publishAnimalRoute = express.Router();
const publishAnimalController = require("../../controllers/publish-animal");
const uploadAnimalImages = require("../../middleware/multer-upload-animal-pictures");

publishAnimalRoute.post(
  "/",
  uploadAnimalImages,
  publishAnimalController.postAnimal
);
publishAnimalRoute.get("/", publishAnimalController.getAllAnimals);
publishAnimalRoute.get("/:id", publishAnimalController.getAnimal);
publishAnimalRoute.put(
  "/:id",
  uploadAnimalImages,
  publishAnimalController.updateAnimal
);
publishAnimalRoute.delete("/:id", publishAnimalController.deleteAnimal);

module.exports = publishAnimalRoute;
