/* eslint-disable no-undefined */
/* eslint-disable no-buffer-constructor */
/* eslint-disable no-underscore-dangle */

const userManager = require("../business-logic/users");
const hashCreator = require("../utils/hash");
const databaseAccess = require("../data-access/users");
const animalManager = require("../business-logic/animals");
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
      if ([...id].length !== 24) {
        throw new Error(`invalid id`);
      }
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
      if ([...id].length !== 24 || [...newData.id].length !== 24) {
        throw new Error(`invalid id`);
      }
      if (newData.id !== id) {
        throw Error("Cannot change user ID after creation!");
      }
      // check old password before update the newOne
      if (newData.newPassword && newData.oldPassword) {
        const user = await userManager.getUser(id);
        const newPassword = hashCreator(req.body.newPassword);
        const oldPassword = hashCreator(req.body.oldPassword);
        if (newPassword === oldPassword) {
          throw Error("New password and current password are the same");
        }
        if (user[0].password !== oldPassword) {
          throw Error("Current password incorrect!");
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
        await userManager.updateUser(newData, req.file);
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
      if ([...id].length !== 24) {
        throw new Error(`invalid id`);
      }
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

      res
        .status(200)
        .json({ message: "You're successfully registered", user: newRegister });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deletePublishedAnimal: async (req, res) => {
    try {
      const userId = req.params.id;
      const { animalId } = req.body;
      if ([...userId].length !== 24 || [...animalId].length !== 24) {
        throw new Error(`invalid id`);
      }

      const user = await userManager.getUser(userId);
      if (user.length === 0) {
        throw new Error(`Cannot delete animal user doesn't exist`);
      }

      if (user[0].registeredAnimals.length === 0) {
        throw new Error(
          `Cannot delete animal, the user do not have registered Animals`
        );
      }

      const matchAnimal = user[0].registeredAnimals.some(
        (element) => element === animalId
      );

      if (!matchAnimal) {
        throw new Error(
          `The animal was not registered by user with the id: ${userId}`
        );
      }

      const animal = await animalManager.getAnimal(animalId);
      if (animal.length === 0) {
        throw new Error(`Cannot delete animal, animal doesn't exist`);
      }

      const updateUser = await userManager.deletePublishedAnimal(
        userId,
        animalId
      );
      if (updateUser.acknowledged === true) {
        res.status(200).json({
          message: `publication id: ${animalId} was removed successfully`,
        });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  addFavorite: async (req, res) => {
    try {
      const userId = req.params.id;
      const { animalId } = req.body;
      if ([...userId].length !== 24 || [...animalId].length !== 24) {
        throw new Error(`invalid id`);
      }

      const user = await userManager.getUser(userId);
      if (user.length === 0) {
        throw new Error(`Cannot add animal user doesn't exist`);
      }

      if (user[0].registeredAnimals.length === 0) {
        throw new Error(
          `Cannot add animal, the user don't have registered Animals`
        );
      }

      const matchAnimal = user[0].registeredAnimals.some(
        (element) => element === animalId
      );

      if (matchAnimal) {
        throw new Error(
          `the animal cannot be added as favorite, belong to your animals`
        );
      }

      const addFavorite = await userManager.addFavorite(userId, animalId);
      if (addFavorite.modifiedCount === 1) {
        res.status(200).json({ message: "animal added successfully" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  removeFavorite: async (req, res) => {
    try {
      const userId = req.params.id;
      const { animalId } = req.body;
      if ([...userId].length !== 24 || [...animalId].length !== 24) {
        throw new Error(`invalid id`);
      }

      const user = await userManager.getUser(userId);
      if (user.length === 0) {
        throw new Error(`Cannot remove favorite user doesn't exist`);
      }

      if (user[0].registeredAnimals.length === 0) {
        throw new Error(
          `Cannot remove favorite, the user don't have registered Animals`
        );
      }

      const matchAnimal = user[0].favorites.some(
        (element) => element === animalId
      );

      if (!matchAnimal) {
        throw new Error(
          `the animal cannot be removed, user don't have it in favorites collection`
        );
      }

      const addFavorite = await userManager.removeFavorite(userId, animalId);
      if (addFavorite.modifiedCount === 1) {
        res.status(200).json({ message: "animal removed successfully" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userRegister;
