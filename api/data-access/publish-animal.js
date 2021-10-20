/* eslint-disable no-underscore-dangle */

const Animal = require("../models/animal");

const databaseAccess = {
  create: async (animalObj) => {
    const animal = new Animal(animalObj);
    const newAnimal = await animal.save();
    return newAnimal;
  },

  update: async (newData) => {
    const animal = await Animal.find({ _id: newData.id });

    if (animal.length === 0) {
      throw new Error(`Cannot update user, id doesn't exist`);
    }
    const animalUpdated = Animal.updateOne(
      { _id: newData.id },
      {
        $set: {
          name: newData.name,
          type: newData.type,
          breed: newData.breed,
          gender: newData.gender,
          character: newData.character,
          dateBirth: newData.dateBirth,
          location: newData.location,
          phone: newData.phone,
          webSite: newData.website,
          describeAnimal: newData.describeAnimal,
          pictures: newData.pictures,
          updateDate: Date.now(),
        },
      }
    );
    return animalUpdated;
  },

  remove: async (id) => {
    let removeAnimal = await Animal.deleteOne({ _id: id });
    if (removeAnimal.deletedCount === 0) {
      throw new Error(`Cannot delete user, id doesn't exist`);
    }

    if (removeAnimal.deletedCount === 1) {
      removeAnimal = `Animal, with the id: '${id}' removed successfully`;
    }
    return removeAnimal;
  },

  read: async (id = "") => {
    const animal = await Animal.find({ _id: id });

    if (animal.length === 0) {
      throw Error(`Cannot find user, id doesn't exist`);
    }
    return animal;
  },

  all: async () => {
    let animals = await Animal.find();
    if (animals.length === 0) {
      animals = `the are not animals in publish-animal collection`;
    }
    return animals;
  },

  findAnimalByEmail: async (userEmail) => {
    const animal = await Animal.find({ email: userEmail }, "email");
    return animal;
  },
  findAnimalLog: async (userEmail, userPassword) => {
    const animal = await Animal.find({
      email: userEmail,
      password: userPassword,
    });
    return animal;
  },
};

module.exports = databaseAccess;
