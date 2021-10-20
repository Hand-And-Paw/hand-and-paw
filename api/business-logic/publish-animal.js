/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const deleteImage = require("../utils/delete-image");
const databaseAccess = require("../data-access/publish-animal");

const animalPublicationManager = {
  createAnimal: async (newAnimal, pictures) => {
    for (const picture in pictures) {
      newAnimal.pictures.push(pictures[picture][0].filename);
    }
    return databaseAccess.create(newAnimal);
  },
  // eslint-disable-next-line consistent-return
  updateAnimal: async (newData, pictures) => {
    if (pictures) {
      const animal = await databaseAccess.read(newData.id);

      if (animal[0].pictures.length !== 0) {
        for (const picture of animal[0].pictures) {
          deleteImage.deleteImageSync(picture, "animal-uploads");
        }
        newData.pictures = [];
        // add new pictures
        for (const picture in pictures) {
          newData.pictures.push(pictures[picture][0].filename);
          console.log(pictures[picture][0].filename);
        }
        const updateAnimal = await databaseAccess.update(newData);
        return updateAnimal;
      }
    }
    const updateAnimal = await databaseAccess.update(newData);
    return updateAnimal;
  },
  removeAnimal: async (animalId) => {
    const animal = await databaseAccess.read(animalId);
    if (animal[0].pictures.length !== 0) {
      for (const picture of animal[0].pictures) {
        deleteImage.deleteImageSync(picture, "animal-uploads");
      }
      const removeAnimal = await databaseAccess.remove(animalId);
      return removeAnimal;
    }
    const removeAnimal = await databaseAccess.remove(animalId);
    return removeAnimal;
  },
  getAnimal: async (animalId) => {
    const animal = await databaseAccess.read(animalId);
    return animal;
  },
  getAllAnimals: async () => {
    return databaseAccess.all();
  },
};

module.exports = animalPublicationManager;
