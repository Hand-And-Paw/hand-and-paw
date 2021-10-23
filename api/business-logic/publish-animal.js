/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { ObjectID } = require("mongoose").mongo;

const deleteImage = require("../utils/delete-image");
const databaseAccess = require("../data-access/publish-animal");

const animalPublicationManager = {
  createAnimal: async (newAnimal, pictures) => {
    for (const picture in pictures) {
      newAnimal.pictures.push({
        picture: pictures[picture][0].filename,
        fieldname: pictures[picture][0].fieldname,
      });
    }
    return databaseAccess.create(newAnimal);
  },
  // eslint-disable-next-line consistent-return
  updateAnimal: async (newData, pictures, animalId) => {
    if (pictures) {
      const animal = await databaseAccess.read(newData.id);

      if (animal[0].pictures.length !== 0) {
        // add new pictures
        const newAnimalPictures = [];
        for (const picture in pictures) {
          newAnimalPictures.push({
            filename: pictures[picture][0].filename,
            fieldname: pictures[picture][0].fieldname,
          });
        }

        console.log("new animal inside BL =>", newAnimalPictures);
        await databaseAccess.updateAnimalPictures(
          animal[0].pictures,
          newAnimalPictures,
          animalId
        );
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
        deleteImage.deleteImageSync(picture.picture, "animal-uploads");
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
  updateOnePicture: async (animalId, pictureId, filename) => {
    const findAnimal = await databaseAccess.read(animalId);
    if (findAnimal.length === 0) {
      throw Error(`Cannot find animal, id doesn't exist`);
    }

    let updated;

    for (const element of findAnimal[0].pictures) {
      if (ObjectID(pictureId).equals(element._id)) {
        deleteImage.deleteImageSync(element.picture, "animal-uploads");
        updated = databaseAccess.updateOneAnimalPicture(pictureId, filename);
      }
    }
    return updated;
  },
  deleteOnePicture: async (animalId, pictureId) => {
    const findAnimal = await databaseAccess.read(animalId);
    if (findAnimal.length === 0) {
      throw Error(`Cannot find animal, id doesn't exist`);
    }
    let deletePicture = await databaseAccess.deleteOneAnimalPicture(
      animalId,
      pictureId,
      findAnimal
    );
    if (
      deletePicture.modifiedCount === 1 &&
      deletePicture.acknowledged === true
    ) {
      const pictureMatch = [...findAnimal[0].pictures].find((picture) =>
        ObjectID(pictureId).equals(picture._id)
      );
      deleteImage.deleteImageSync(pictureMatch.picture, "animal-uploads");
      deletePicture = `picture, with the id: '${pictureId}' removed successfully`;
    }
    return deletePicture;
  },

  uploadPictures: async (animalId, pictures) => {
    const findAnimal = await databaseAccess.read(animalId);
    if (findAnimal.length === 0) {
      throw Error(`Cannot find animal, id doesn't exist`);
    }
    const objectToUpload = [];

    for (const picture in pictures) {
      objectToUpload.push({
        filename: pictures[picture][0].filename,
        fieldname: pictures[picture][0].fieldname,
      });
    }
    const uploadPictures = await databaseAccess.uploadPictures(
      animalId,
      objectToUpload
    );
    return uploadPictures;
  },
  updatePrincipalPicture: async (animalId, pictureId, isPrincipal) => {
    const findAnimal = await databaseAccess.read(animalId);
    if (findAnimal.length === 0) {
      throw Error(`Cannot find animal, id doesn't exist`);
    }
    let updatePicture = await databaseAccess.updatePrincipalPicture(
      animalId,
      pictureId,
      isPrincipal
    );
    if (
      updatePicture.modifiedCount === 1 &&
      updatePicture.acknowledged === true
    ) {
      updatePicture = `picture, with the id: '${pictureId}' updated successfully`;
    }
    return updatePicture;
  },
};

module.exports = animalPublicationManager;
