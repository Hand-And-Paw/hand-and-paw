/* eslint-disable no-undefined */
/* eslint-disable no-underscore-dangle */

const animalManager = require("../business-logic/publish-animal");
// const animalDbAccess = require("../data-access/publish-animal");
const subscriberDbAccess = require("../data-access/subscriber");
const deleteAvatar = require("../utils/delete-avatar");

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
      const animalUpdated = await animalManager.getAnimal(id);
      res.status(200).send(animalUpdated);
    } catch (error) {
      // if any error ,make sure multer doesn't store image
      if (req.file) {
        await deleteAvatar.deleteImageAsync(req.file.filename);
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
      const subscriber = subscriberDbAccess.read(userId);
      if (subscriber.length === 0) {
        res
          .status(400)
          .json({ message: `cannot publish animal user doesn't exist` });
      }
      body.pictures = [];
      const newPublication = await animalManager.createAnimal(body, req.files);
      // add the animal to the subscriber.publications
      if (newPublication.length !== 0) {
        subscriber.publishedAnimals.push(newPublication[0]._id);
      }

      res.status(201).json(newPublication);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = personPublication;
