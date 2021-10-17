/* eslint-disable no-underscore-dangle */

const Animal = require("../models/animal");

const databaseAccess = {
  create: async (animalObj) => {
    const animal = new Animal(animalObj);
    const newAnimal = await animal.save();
    return newAnimal;
  },

  update: async (newData, userAvatar) => {
    const animal = await Animal.find({ _id: newData.id });

    if (animal.length === 0) {
      throw new Error(`Cannot update user, id doesn't exist`);
    }
    const animalUpdated = Animal.updateOne(
      { _id: newData.id },
      {
        $set: {
          name: newData.name,
          password: newData.password,
          location: newData.location,
          phone: newData.phone,
          email: newData.email,
          avatar: userAvatar,
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
      animals = `the are not animals in person-subscription collection`;
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
