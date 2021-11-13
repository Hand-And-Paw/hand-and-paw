/* eslint-disable no-underscore-dangle */

const Users = require("../models/user");

const databaseAccess = {
  create: async (newUser) => {
    const user = new Users(newUser);
    const savedUser = await user.save();

    const returnUser = {
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
    };
    return returnUser;
  },

  update: async (newData, userAvatar) => {
    const user = await Users.find({ _id: newData.id });

    if (user.length === 0) {
      throw new Error(`Cannot update user, id doesn't exist`);
    }
    const userUpdated = Users.updateOne(
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
    return userUpdated;
  },

  remove: async (id) => {
    let removeUser = await Users.deleteOne({ _id: id });
    if (removeUser.deletedCount === 0) {
      throw new Error(`Cannot delete user, id doesn't exist`);
    }

    if (removeUser.deletedCount === 1) {
      removeUser = `User, with the id: '${id}' removed successfully`;
    }
    return removeUser;
  },

  read: async (id = "") => {
    const user = await Users.find({ _id: id });
    return user;
  },

  all: async () => {
    const users = await Users.find();
    return users;
  },
  updateUserPublication: async (animalId, userId) => {
    const registeredAnimals = Users.updateOne(
      { _id: userId },
      { $push: { registeredAnimals: animalId } }
    );
    return registeredAnimals;
  },
  deleteUserPublication: async (userId, animalId) => {
    const registeredAnimals = Users.updateOne(
      { _id: userId },
      { $pull: { registeredAnimals: animalId } }
    );
    return registeredAnimals;
  },

  findUserByEmail: async (userEmail) => {
    const user = await Users.find({ email: userEmail }, "email");
    return user;
  },
  findUserLog: async (userEmail, userPassword) => {
    const user = await Users.find({
      email: userEmail,
      password: userPassword,
    });
    return user;
  },
  addFavorite: async (userId, animalId) => {
    const favoriteAnimals = Users.updateOne(
      { _id: userId },
      { $push: { favorites: animalId } }
    );
    return favoriteAnimals;
  },
  removeFavorite: async (userId, animalId) => {
    const favoriteAnimals = Users.updateOne(
      { _id: userId },
      { $pull: { favorites: animalId } }
    );
    return favoriteAnimals;
  },
};

module.exports = databaseAccess;
