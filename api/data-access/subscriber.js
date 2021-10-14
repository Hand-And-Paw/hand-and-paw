/* eslint-disable no-underscore-dangle */

const Subscriber = require("../models/subscriber");

const databaseAccess = {
  create: async (newUser) => {
    const subscriber = new Subscriber(newUser);
    const newSubscriber = await subscriber.save();
    return newSubscriber;
  },

  update: async (newData, userAvatar) => {
    const subscriber = await Subscriber.find({ _id: newData.id });

    if (subscriber.length === 0) {
      throw new Error(`Cannot update user, id doesn't exist`);
    }
    const subscriberUpdated = Subscriber.updateOne(
      { _id: newData.id },
      {
        $set: {
          name: newData.name,
          password: newData.password,
          location: newData.location,
          phone: newData.phone,
          email: newData.email,
          avatar: userAvatar,
          updateDate: Date.now(),
          publicAccess: {
            monday: {
              access: newData["monday-access"],
              hours: newData["monday-hours"],
            },
            tuesday: {
              access: newData["tuesday-access"],
              hours: newData["tuesday-hours"],
            },
            wednesday: {
              access: newData["wednesday-access"],
              hours: newData["wednesday-hours"],
            },
            thursday: {
              access: newData["thursday-access"],
              hours: newData["thursday.hours"],
            },
            friday: {
              access: newData["friday-access"],
              hours: newData["friday-hours"],
            },
            saturday: {
              access: newData["saturday-access"],
              hours: newData["saturday-hours"],
            },
            sunday: {
              access: newData["sunday-access"],
              hours: newData["sunday-hours"],
            },
          },
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
      throw Error(`Cannot find user, id doesn't exist`);
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
};

module.exports = databaseAccess;
