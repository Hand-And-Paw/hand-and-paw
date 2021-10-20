/* eslint-disable no-undefined */
/* eslint-disable no-buffer-constructor */
/* eslint-disable no-underscore-dangle */

const userManager = require("../business-logic/user-register");
const hashCreator = require("../utils/hash");
const databaseAccess = require("../data-access/user-register");
const deleteAvatar = require("../utils/delete-image");

const userRegister = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userManager.getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userManager.getUser(id);
      res.status(200).send(user);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const newData = req.body;
      if (newData.id !== id) {
        throw Error("Cannot change user ID after creation!");
      }
      // check old password before update the newOne
      if (newData.newPassword && newData.oldPassword) {
        const user = await userManager.getUser(id);
        const newPassword = hashCreator(req.body.newPassword);
        const oldPassword = hashCreator(req.body.oldPassword);
        if (user[0].password !== oldPassword) {
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
        await userManager.updateUser(newData, req.file.filename);
        const userUpdated = await userManager.getUser(id);
        userUpdated[0].password = undefined;
        res.status(200).send(userUpdated);
        return;
      }
      await userManager.updateUser(newData);
      const userUpdated = await userManager.getUser(id);
      userUpdated[0].password = undefined;
      res.status(200).send(userUpdated);
    } catch (error) {
      // if any error ,make sure multer doesn't store image
      if (req.file) {
        await deleteAvatar.deleteImageAsync(
          req.file.filename,
          "avatar-uploads"
        );
      }
      res.status(401).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      const userDeleted = await userManager.removeUser(id);
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
      const newRegister = await userManager.createUser(newUser);

      res.status(201).json(newRegister);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = userRegister;
