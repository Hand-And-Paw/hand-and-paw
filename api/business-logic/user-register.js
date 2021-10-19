/* eslint-disable no-underscore-dangle */
const deleteAvatar = require("../utils/delete-avatar");
const databaseAccess = require("../data-access/user-register");

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
      if (user[0].avatar) deleteAvatar.deleteImageSync(user[0].avatar);

      const updateUser = await databaseAccess.update(newData, avatar);
      return updateUser;
    }
  },
  removeUser: async (userId) => {
    const user = await databaseAccess.read(userId);
    if (user[0].avatar) {
      deleteAvatar.deleteImageAsync(user[0].avatar);
    }
    const removeUser = await databaseAccess.remove(userId);
    return removeUser;
  },
  getUser: async (userId) => {
    const user = await databaseAccess.read(userId);
    console.log(user);
    return user;
  },
  getAllUsers: async () => {
    return databaseAccess.all();
  },
};

module.exports = userSubscriptionManager;
