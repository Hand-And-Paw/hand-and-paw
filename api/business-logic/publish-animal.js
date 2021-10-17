/* eslint-disable no-underscore-dangle */
const deleteAvatar = require("../utils/delete-avatar");
const databaseAccess = require("../data-access/publish-animal");

const animalPublicationManager = {
  createAnimal: async (newAnimal, pictures) => {
    for (const picture in pictures) {
      newAnimal.pictures.push(pictures[picture][0].filename);
    }
    return databaseAccess.create(newAnimal);
  },
  // eslint-disable-next-line consistent-return
  updateAnimal: async (newData, avatar) => {
    if (avatar) {
      const animal = await databaseAccess.read(newData.id);
      if (animal[0].avatar) deleteAvatar.deleteImageSync(animal[0].avatar);

      const updateAnimal = await databaseAccess.update(newData, avatar);
      return updateAnimal;
    }
  },
  removeAnimal: async (animalId) => {
    const animal = await databaseAccess.read(animalId);
    if (animal[0].avatar) {
      deleteAvatar.deleteImageAsync(animal[0].avatar);
    }
    const removeAnimal = await databaseAccess.remove(animalId);
    return removeAnimal;
  },
  getAnimal: async (animalId) => {
    const animal = await databaseAccess.read(animalId);
    console.log(animal);
    return animal;
  },
  getAllAnimals: async () => {
    return databaseAccess.all();
  },
};

module.exports = animalPublicationManager;
