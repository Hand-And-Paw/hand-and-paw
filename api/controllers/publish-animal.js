/* eslint-disable no-undefined */
/* eslint-disable no-underscore-dangle */

const animalManager = require("../business-logic/publish-animal");
// const animalDbAccess = require("../data-access/publish-animal");
const userDbAccess = require("../data-access/user-register");
const deleteImage = require("../utils/delete-image");

const personPublication = {
  getAllAnimals: async (req, res) => {
    try {
      const animals = await animalManager.getAllAnimals();
      res.status(200).send(animals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAnimal: async (req, res) => {
    try {
      const { id } = req.params;
      const animal = await animalManager.getAnimal(id);
      res.status(200).send(animal);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
  updateAnimal: async (req, res) => {
    try {
      const { id } = req.params;
      const newData = req.body;
      if (req.files !== undefined) {
        await animalManager.updateAnimal(newData, req.files);
        const animalUpdated = await animalManager.getAnimal(id);
        res.status(200).send(animalUpdated);
        return;
      }
      await animalManager.updateAnimal(newData);
      const animalUpdated = await animalManager.getAnimal(id);
      res.status(200).send(animalUpdated);
    } catch (error) {
      // if any error ,make sure multer doesn't store image
      if (req.files) {
        await deleteImage.deleteImageAsync(req.file.filename, "animal-uploads");
      }
      res.status(401).json({ message: error.message });
    }
  },
  deleteAnimal: async (req, res) => {
    try {
      const { id } = req.params;

      const userDeleted = await animalManager.removeAnimal(id);
      res.status(200).send(userDeleted);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  postAnimal: async (req, res) => {
    try {
      const { body } = req;
      const { userId } = body;
      // check if subscriber exists
      const subscriber = await userDbAccess.read(userId);

      if (subscriber.length === 0) {
        res
          .status(400)
          .json({ message: `cannot publish animal user doesn't exist` });
      }
      body.pictures = [];
      const newPublication = await animalManager.createAnimal(body, req.files);
      // add the animal to the subscriber.publications
      if (newPublication.length !== 0) {
        await userDbAccess.updateUserPublication(
          newPublication._id,
          subscriber[0]._id
        );
      }
      res.status(201).json(newPublication);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = personPublication;
