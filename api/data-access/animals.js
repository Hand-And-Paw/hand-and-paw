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
          age: newData.age,
          location: newData.location,
          province: newData.province,
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
    return animal;
  },

  all: async () => {
    let animals = await Animal.find();
    return animals;
  },
  updateAnimalPictures: async (previousPictures, newPictures, animalId) => {
    let numberOfPictures = 0;
    if (previousPictures.length === 0) {
      newPictures.forEach(async (picture) => {
        let newNumberFieldname = ++numberOfPictures;
        await Animal.updateOne(
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
    }
    newPictures.forEach(async (newPicture) => {
      previousPictures.forEach(async (prevPicture) => {
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
  filterAnimals: async (filterObj) => {
    if (filterObj.age && filterObj.age > 10) {
      filterObj.age = { $gt: 10 };
      const animals = await Animal.find(filterObj);
      return animals;
    }
    const animals = await Animal.find(filterObj);
    return animals;
  },
};

module.exports = databaseAccess;
