/* eslint-disable no-underscore-dangle */

const Register = require("../models/user-register");

const databaseAccess = {
  create: async (newUser) => {
    const register = new Register(newUser);
    const newRegister = await register.save();
    return newRegister;
  },

  update: async (newData, userAvatar) => {
    const register = await Register.find({ _id: newData.id });

    if (register.length === 0) {
      throw new Error(`Cannot update user, id doesn't exist`);
    }
    const registerUpdated = Register.updateOne(
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
    return registerUpdated;
  },

  remove: async (id) => {
    let removeUser = await Register.deleteOne({ _id: id });
    if (removeUser.deletedCount === 0) {
      throw new Error(`Cannot delete user, id doesn't exist`);
    }

    if (removeUser.deletedCount === 1) {
      removeUser = `User, with the id: '${id}' removed successfully`;
    }
    return removeUser;
  },

  read: async (id = "") => {
    const register = await Register.find({ _id: id });

    if (register.length === 0) {
      throw Error(`Cannot find user, id doesn't exist`);
    }
    return register;
  },

  all: async () => {
    let registers = await Register.find();
    if (registers.length === 0) {
      registers = `there are not users in Database`;
    }
    return registers;
  },

  findUserByEmail: async (userEmail) => {
    const register = await Register.find({ email: userEmail }, "email");
    return register;
  },
  findUserLog: async (userEmail, userPassword) => {
    const register = await Register.find({
      email: userEmail,
      password: userPassword,
    });
    return register;
  },
};

module.exports = databaseAccess;
