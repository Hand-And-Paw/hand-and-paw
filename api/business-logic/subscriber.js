/* eslint-disable no-underscore-dangle */
const fs = require("fs");
const path = require("path");

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
      if (subscriber[0].avatar) {
        fs.unlink(
          path.join(
            __dirname,
            "..",
            "..",
            "client",
            "public",
            "avatar-uploads",
            `${subscriber[0].avatar}`
          ),
          (err) => {
            if (err) console.log(err);
            else {
              console.log("\nDeleted file: example_file.txt");
            }
          }
        );
      }
    }
    const updateSubscriber = await databaseAccess.update(newData, avatar);
    return updateSubscriber;
  },
  removeSubscriber: async (subscriberId) => {
    const subscriber = await databaseAccess.read(subscriberId);
    if (subscriber[0].avatar) {
      fs.unlink(
        path.join(
          __dirname,
          "..",
          "..",
          "client",
          "public",
          "avatar-uploads",
          `${subscriber[0].avatar}`
        ),
        (err) => {
          if (err) console.log(err);
          else {
            console.log("\nDeleted file: example_file.txt");
          }
        }
      );
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
  deleteImage: async (fileName) => {
    await fs.unlink(
      path.join(
        __dirname,
        "..",
        "..",
        "client",
        "public",
        "avatar-uploads",
        `${fileName}`
      ),
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`\nDeleted file: ${fileName}`);
        }
      }
    );
  },
};

module.exports = personSubscriptionManager;
