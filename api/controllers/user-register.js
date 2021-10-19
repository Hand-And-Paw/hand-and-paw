/* eslint-disable no-undefined */
/* eslint-disable no-buffer-constructor */
/* eslint-disable no-underscore-dangle */

const registerManager = require("../business-logic/user-register");
const hashCreator = require("../utils/hash");
const databaseAccess = require("../data-access/user-register");
const deleteAvatar = require("../utils/delete-avatar");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const registers = await registerManager.getAllUsers();
      res.status(200).send(registers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const register = await registerManager.getUser(id);
      res.status(200).send(register);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const newData = req.body;
      if (newData.id !== id) {
        throw Error("Cannot change register ID after creation!");
      }
      // check old password before update the newOne
      if (newData.newPassword && newData.oldPassword) {
        const register = await registerManager.getUser(id);
        const newPassword = hashCreator(req.body.newPassword);
        const oldPassword = hashCreator(req.body.oldPassword);
        if (register[0].password !== oldPassword) {
          throw Error("Old password incorrect!");
        } else {
          newData.password = newPassword;
        }
      }
      // check if user update the email
      if (newData.email !== newData.repeatEmail) {
        throw Error("Emails do not match!");
      }
      const foundEmail = await databaseAccess.findUserByEmail(newData.email);
      if (foundEmail.length !== 0) {
        throw new Error(
          `Cannot update email, the email: ${foundEmail[0].email}, already exists`
        );
      }

      // if there is an image uploaded
      if (req.file !== undefined) {
        await registerManager.updateUser(newData, req.file.filename);
        const registerUpdated = await registerManager.getUser(id);
        res.status(200).send(registerUpdated);
        return;
      }
      await registerManager.updateUser(newData);
      // return updated object
      const registerUpdated = await registerManager.getUser(id);
      res.status(200).send(registerUpdated);
    } catch (error) {
      // if any error ,make sure multer doesn't store image
      if (req.file) {
        await deleteAvatar.deleteImageAsync(req.file.filename);
      }
      res.status(401).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      const userDeleted = await registerManager.removeUser(id);
      res.status(200).send(userDeleted);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  postUser: async (req, res) => {
    try {
      const username = req.body.name;
      const userEmail = req.body.email;

      const userPassword = hashCreator(req.body.password);
      const repeatUserPassword = hashCreator(req.body.repeatPassword);
      // check passwords
      if (userPassword !== repeatUserPassword) {
        throw Error("passwords are not equal!");
      }
      // check if email exist
      const dbUser = await databaseAccess.findUserByEmail(userEmail);
      if (dbUser.length !== 0) {
        throw new Error(
          `Cannot create user with the email: ${dbUser[0].email}, already exists`
        );
      }
      const newUser = {
        name: username,
        password: userPassword,
        email: userEmail,
      };
      const newSubscription = await registerManager.createUser(newUser);

      res.status(201).json(newSubscription);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = userController;
