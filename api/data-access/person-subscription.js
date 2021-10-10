/* eslint-disable no-underscore-dangle */

const Subscriber = require("../models/subscriber");

const databaseAccess = {
  create: async (newUser) => {
    const subscriber = new Subscriber(newUser);
    const newSubscriber = await subscriber.save();
    return newSubscriber;
  },

  update: async (newData, userAvatar) => {
    console.log(newData);
    const subscriber = await Subscriber.find({ _id: newData.id });

    if (subscriber.length === 0) {
      throw new Error(`Cannot update user, id doesn't exist`);
    }
    const subscriberUpdated = Subscriber.updateOne(
      { _id: newData.id },
      {
        $set: {
          personName: newData.name,
          surname: newData.surname,
          password: newData.password,
          location: newData.location,
          phone: newData.phone,
          email: newData.email,
          avatar: userAvatar,
          updateDate: Date.now(),
        },
      }
    );
    return subscriberUpdated;
  },

  remove: async (id) => {
    let removeUser = await Subscriber.deleteOne({ _id: id });
    if (removeUser.deletedCount === 0) {
      throw new Error(`Cannot delete user, id doesn't exist`);
    }

    if (removeUser.deletedCount === 1) {
      removeUser = `User, with the id: '${id}' removed successfully`;
    }
    return removeUser;
  },

  read: async (id = "") => {
    const subscriber = await Subscriber.find({ _id: id });

    if (subscriber.length === 0) {
      throw new Error(`Cannot find user, id doesn't exist`);
    }

    return subscriber;
  },

  all: async () => {
    let subscribers = await Subscriber.find();
    if (subscribers.length === 0) {
      subscribers = `the are not subscribers in person-subscription collection`;
    }
    return subscribers;
  },

  findUserByEmail: async (userEmail) => {
    const subscriber = await Subscriber.find({ email: userEmail }, "email");
    return subscriber;
  },

  //   findUserLog: async (userOrEmail, password) => {
  //     const database = await db;
  //     const queryString = `SELECT username,email,password,id FROM user`;
  //     const emails = await database.all(queryString);

  //     // eslint-disable-next-line consistent-return
  //     const userMatch = emails.find((entry) => {
  //       if (
  //         (userOrEmail === entry.username && password !== entry.password) ||
  //         (userOrEmail === entry.email && password !== entry.password)
  //       ) {
  //         throw new Error("Password Incorrect");
  //       }
  //       if (
  //         (userOrEmail === entry.username && password === entry.password) ||
  //         (userOrEmail === entry.email && password === entry.password)
  //       ) {
  //         return entry;
  //       }
  //     });

  //     return userMatch;
  //   },
};

module.exports = databaseAccess;
