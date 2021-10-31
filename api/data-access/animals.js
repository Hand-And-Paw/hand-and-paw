/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
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
      throw new Error(`Cannot update animal, id doesn't exist`);
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
          updateDate: Date.now(),
        },
      }
    );
    return animalUpdated;
  },

  remove: async (id) => {
    let removeAnimal = await Animal.deleteOne({ _id: id });
    if (removeAnimal.deletedCount === 0) {
      throw new Error(`Cannot delete animal, id doesn't exist`);
    }

    if (removeAnimal.deletedCount === 1) {
      removeAnimal = `Animal, with the id: '${id}' removed successfully`;
    }
    return removeAnimal;
  },

  read: async (id = "") => {
    const animal = await Animal.find({ _id: id });

    if (animal.length === 0) {
      throw Error(`Cannot find animal, id doesn't exist`);
    }
    return animal;
  },

  all: async () => {
    let animals = await Animal.find();
    if (animals.length === 0) {
      animals = `the are not animals in Animal collection`;
    }
    return animals;
  },
  updateAnimalPictures: async (previousPictures, newPictures, animalId) => {
    newPictures.forEach(async (newPicture) => {
      previousPictures.forEach(async (prevPicture) => {
        console.log(newPicture.fieldname === prevPicture.fieldname);
        if (newPicture.fieldname === prevPicture.fieldname) {
          await Animal.updateOne(
            { $and: [{ _id: animalId }, { "pictures._id": prevPicture._id }] },
            {
              $set: {
                "pictures.$.picture.data": `${newPicture.picture.data}`,
                "pictures.$.picture.contentType": `${newPicture.picture.contentType}`,
              },
            }
          );
        }
      });
    });
  },
  updateOneAnimalPicture: async (animalId, pictureId, newPicture) => {
    const update = await Animal.updateOne(
      { $and: [{ _id: animalId }, { "pictures._id": pictureId }] },
      {
        $set: {
          "pictures.$.picture.data": `${newPicture.picture.data}`,
          "pictures.$.picture.contentType": `${newPicture.picture.contentType}`,
        },
      }
    );
    return update;
  },
  deleteOneAnimalPicture: async (animalId, pictureId) => {
    const deletePicture = await Animal.updateOne(
      { _id: animalId },
      {
        $pull: {
          pictures: {
            _id: pictureId,
          },
        },
      }
    );
    return deletePicture;
  },
  uploadPictures: async (animalId, pictures, numberOfPictures) => {
    let uploadPictures;
    pictures.forEach(async (picture) => {
      let newNumberFieldname = ++numberOfPictures;
      uploadPictures = await Animal.updateOne(
        { _id: animalId },
        {
          $push: {
            pictures: {
              picture: {
                data: picture.picture.data,
                contentType: picture.picture.contentType,
              },
              fieldname: `picture${newNumberFieldname}`,
            },
          },
        }
      );
    });
    return uploadPictures;
  },
  updatePrincipalPicture: async (animalId, pictureId, isPrincipal) => {
    const update = await Animal.updateOne(
      { $and: [{ _id: animalId }, { "pictures._id": pictureId }] },
      { $set: { "pictures.$.isPrincipal": `${isPrincipal}` } }
    );
    return update;
  },
};

module.exports = databaseAccess;
