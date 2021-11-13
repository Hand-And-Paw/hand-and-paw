/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
const databaseAccess = require("../data-access/users");
const animalManager = require("./animals");
const deleteImage = require("../utils/delete-image");
const compressSharp = require("../utils/sharp-avatar");

const userSubscriptionManager = {
  createUser: async (newUser) => {
    const user = {
      name: newUser.name,
      password: newUser.password,
      email: newUser.email,
    };
    return databaseAccess.create(user);
  },
  // eslint-disable-next-line consistent-return
  updateUser: async (newData, avatar) => {
    const objectWithValues = {};
    for (const [key, value] of Object.entries(newData)) {
      if (value === "" || value === "all") {
        // eslint-disable-next-line no-continue
        continue;
      }
      objectWithValues[key] = value;
    }
    if (avatar) {
      const imageCompressed = await compressSharp(avatar.path);
      const pictureResized = {
        data: imageCompressed.toString("base64"),
        contentType: avatar.mimetype,
      };
      deleteImage.deleteImageSync(avatar.filename, "avatar-uploads");
      const updateUser = await databaseAccess.update(
        objectWithValues,
        pictureResized
      );
      return updateUser;
    }
    if (Object.keys(objectWithValues).length === 0) {
      // eslint-disable-next-line consistent-return
      return;
    }
    const updateUser = await databaseAccess.update(objectWithValues);
    return updateUser;
  },
  removeUser: async (userId) => {
    const user = await databaseAccess.read(userId);
    if (user[0].registeredAnimals.length !== 0) {
      [...user[0].registeredAnimals].forEach(
        async (animalId) => await animalManager.removeAnimal(animalId)
      );
    }
    const removeUser = await databaseAccess.remove(userId);
    return removeUser;
  },
  getUser: async (userId) => {
    const user = await databaseAccess.read(userId);
    return user;
  },
  getAllUsers: async () => {
    return databaseAccess.all();
  },
  deletePublishedAnimal: async (userId, animalId) => {
    const updateUserPublications = await databaseAccess.deleteUserPublication(
      userId,
      animalId
    );

    await animalManager.removeAnimal(animalId);

    return updateUserPublications;
  },
  addFavorite: async (userId, animalId) => {
    const updateUserPublications = await databaseAccess.addFavorite(
      userId,
      animalId
    );
    return updateUserPublications;
  },
  removeFavorite: async (userId, animalId) => {
    const updateUserPublications = await databaseAccess.removeFavorite(
      userId,
      animalId
    );

    return updateUserPublications;
  },
};

module.exports = userSubscriptionManager;
