/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { ObjectID } = require("mongoose").mongo;
const compressSharp = require("../utils/sharp");
const deleteImage = require("../utils/delete-image");
const databaseAccess = require("../data-access/animals");

const animalsManager = {
  createAnimal: async (newAnimal, pictures) => {
    const picturesValues = Object.values(pictures);
    for await (const picture of picturesValues) {
      const imageCompressed = await compressSharp(picture[0].path);

      newAnimal.pictures.push({
        picture: {
          data: Buffer.from(imageCompressed, "base64"),
          contentType: picture[0].mimetype,
        },
        fieldname: picture[0].fieldname,
      });
      deleteImage.deleteImageSync(picture[0].filename, "animal-uploads");
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
    const animals = await databaseAccess.all();

    for (const animal in animals) {
      for (const picture in animal.pictures) {
        console.log(picture);
        picture.data = Buffer.from(picture.data, "base64");
      }
    }
    return animals;
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

module.exports = animalsManager;
