/* eslint-disable no-underscore-dangle */
const deleteAvatar = require("../utils/delete-image");
const databaseAccess = require("../data-access/user-register");
const animalManager = require("./publish-animal");

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
    if (avatar) {
      const user = await databaseAccess.read(newData.id);
      if (user[0].avatar)
        deleteAvatar.deleteImageSync(user[0].avatar, "avatar-uploads");

      const updateUser = await databaseAccess.update(newData, avatar);
      return updateUser;
    }
    const updateUser = await databaseAccess.update(newData);
    return updateUser;
  },
  removeUser: async (userId) => {
    const user = await databaseAccess.read(userId);
    if (user[0].avatar) {
      deleteAvatar.deleteImageAsync(user[0].avatar, "avatar-uploads");
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
};

module.exports = userSubscriptionManager;
