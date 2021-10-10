/* eslint-disable no-underscore-dangle */
const databaseAccess = require("../data-access/person-subscription");

const personSubscriptionManager = {
  createSubscriber: async (newUser) => {
    const subscriber = {
      personName: newUser.name,
      password: newUser.password,
      email: newUser.email,
    };
    return databaseAccess.create(subscriber);
  },
  updateSubscriber: async (newData, avatar) => {
    const updateSubscriber = await databaseAccess.update(newData, avatar);
    return updateSubscriber;
  },
  removeSubscriber: async (subscriberId) => {
    const removeSubscriber = await databaseAccess.remove(subscriberId);
    return removeSubscriber;
  },
  getSubscriber: async (subscriberId) => {
    return databaseAccess.read(subscriberId);
  },
  getAllSubscribers: async () => {
    return databaseAccess.all();
  },
};

module.exports = personSubscriptionManager;
