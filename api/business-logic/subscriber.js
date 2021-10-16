/* eslint-disable no-underscore-dangle */
const deleteAvatar = require("../utils/delete-avatar");
const databaseAccess = require("../data-access/subscriber");

const personSubscriptionManager = {
  createSubscriber: async (newUser) => {
    const subscriber = {
      name: newUser.name,
      password: newUser.password,
      email: newUser.email,
    };
    return databaseAccess.create(subscriber);
  },
  // eslint-disable-next-line consistent-return
  updateSubscriber: async (newData, avatar) => {
    if (avatar) {
      const subscriber = await databaseAccess.read(newData.id);
      if (subscriber[0].avatar)
        deleteAvatar.deleteImageSync(subscriber[0].avatar);

      const updateSubscriber = await databaseAccess.update(newData, avatar);
      return updateSubscriber;
    }
  },
  removeSubscriber: async (subscriberId) => {
    const subscriber = await databaseAccess.read(subscriberId);
    if (subscriber[0].avatar) {
      deleteAvatar.deleteImageAsync(subscriber[0].avatar);
    }
    const removeSubscriber = await databaseAccess.remove(subscriberId);
    return removeSubscriber;
  },
  getSubscriber: async (subscriberId) => {
    const subscriber = await databaseAccess.read(subscriberId);
    console.log(subscriber);
    return subscriber;
  },
  getAllSubscribers: async () => {
    return databaseAccess.all();
  },
};

module.exports = personSubscriptionManager;
