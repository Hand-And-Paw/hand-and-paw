/* eslint-disable no-undefined */
/* eslint-disable no-buffer-constructor */
/* eslint-disable no-underscore-dangle */

const userManager = require("../business-logic/users");
const hashCreator = require("../utils/hash");
const databaseAccess = require("../data-access/users");
const animalManager = require("../business-logic/animals");
const deleteAvatar = require("../utils/delete-image");
const CustomError = require("../utils/custom-error");

const userRegister = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userManager.getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).json({ message: `${error.code} ${error.message}` });
    }
  },
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      if ([...id].length !== 24) {
        throw new CustomError(`invalid id`, "ValidationError", "VE001");
      }
      const user = await userManager.getUser(id);
      res.status(200).send(user);
    } catch (error) {
      res.status(401).json({ message: `${error.code} ${error.message}` });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const newData = req.body;
      if ([...id].length !== 24 || [...newData.id].length !== 24) {
        throw new CustomError(`invalid id`, "ValidationError", "VE001");
      }
      if (newData.id !== id) {
        throw new CustomError("Cannot change user ID after creation!", "VE002");
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
          if (newData.id !== id) {
            throw new CustomError(
              "Current password incorrect!",
              "ValidationError",
              "VE003"
            );
          }
        } else {
          newData.password = newPassword;
        }
      }
      // check if user update the email
      if (newData.email !== newData.repeatEmail) {
        throw new CustomError("Emails do not match!", "VE004");
      }
      const foundEmail = await databaseAccess.findUserByEmail(newData.email);
      if (foundEmail.length !== 0) {
        throw new CustomError(
          `Cannot update email, the email: ${foundEmail[0].email}, already exists`,
          "ValidationError",
          "VE005"
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
      res.status(401).json({ message: `${error.code} ${error.message}` });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      if ([...id].length !== 24) {
        throw new CustomError(`invalid id`, "ValidationError", "VE001");
      }
      const userDeleted = await userManager.removeUser(id);
      res.status(200).send(userDeleted);
    } catch (error) {
      res.status(500).json({ message: `${error.code} ${error.message}` });
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
        throw new CustomError(
          `passwords are not equal!`,
          "ValidationError",
          "VE006"
        );
      }
      // check if email exist
      const dbUser = await databaseAccess.findUserByEmail(userEmail);
      if (dbUser.length !== 0) {
        throw new CustomError(
          `Cannot create user with the email: ${dbUser[0].email}, already exists`,
          "VE006"
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
      res.status(400).json({ message: `${error.code} ${error.message}` });
    }
  },
  deletePublishedAnimal: async (req, res) => {
    try {
      const userId = req.params.id;
      const { animalId } = req.body;
      if ([...userId].length !== 24 || [...animalId].length !== 24) {
        throw new CustomError(`invalid id`, "ValidationError", "VE001");
      }

      const user = await userManager.getUser(userId);
      if (user.length === 0) {
        throw new CustomError(
          `Cannot delete animal user doesn't exist`,
          "ValidationError",
          "VE007"
        );
      }

      if (user[0].registeredAnimals.length === 0) {
        throw new CustomError(
          `Cannot delete animal, the user do not have registered Animals`,
          "ValidationError",
          "VE008"
        );
      }

      const matchAnimal = user[0].registeredAnimals.some(
        (element) => element === animalId
      );

      if (!matchAnimal) {
        throw new CustomError(
          `The animal was not registered by user with the id: ${userId}`,
          "ValidationError",
          "VE009"
        );
      }

      const animal = await animalManager.getAnimal(animalId);
      if (animal.length === 0) {
        throw new CustomError(
          `Cannot delete animal id doesn't exist`,
          "ValidationError",
          "VE007"
        );
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
      res.status(400).json({ message: `${error.code} ${error.message}` });
    }
  },
  addFavorite: async (req, res) => {
    try {
      const userId = req.params.id;
      const { animalId } = req.body;
      if ([...userId].length !== 24 || [...animalId].length !== 24) {
        throw new CustomError(`invalid id`, "ValidationError", "VE001");
      }

      const user = await userManager.getUser(userId);
      if (user.length === 0) {
        throw new CustomError(
          `Cannot add animal user doesn't exist`,
          "NotFoundError",
          "NF001"
        );
      }

      const checkFavoriteAnimal = user[0].favorites.some(
        (element) => element === animalId
      );

      if (checkFavoriteAnimal) {
        throw new CustomError(
          `Cannot add animal already exist as favorite`,
          "NotFoundError",
          "VE006"
        );
      }

      const matchAnimal = user[0].registeredAnimals.some(
        (element) => element === animalId
      );

      if (matchAnimal) {
        throw new CustomError(
          `the animal cannot be added as favorite, belong to your animals`,
          "NotFoundError",
          "VE006"
        );
      }

      const addFavorite = await userManager.addFavorite(userId, animalId);
      if (addFavorite.modifiedCount === 1) {
        res.status(200).json({ message: "animal added successfully" });
      }
    } catch (error) {
      res.status(401).json({ message: `${error.code} ${error.message}` });
    }
  },
  removeFavorite: async (req, res) => {
    try {
      const userId = req.params.id;
      const { animalId } = req.body;
      if ([...userId].length !== 24 || [...animalId].length !== 24) {
        throw new CustomError(`invalid id`, "ValidationError", "VE001");
      }

      const user = await userManager.getUser(userId);
      if (user.length === 0) {
        throw new CustomError(
          `Cannot remove animal user doesn't exist`,
          "NotFoundError",
          "NF001"
        );
      }

      if (user[0].favorites.length === 0) {
        throw new CustomError(
          `Cannot remove favorite animal, the user do not have registered Animals`,
          "ValidationError",
          "VE0010"
        );
      }

      const matchAnimal = user[0].favorites.some(
        (element) => element === animalId
      );

      if (!matchAnimal) {
        throw new CustomError(
          `the animal cannot be removed, not found in user's collection`,
          "ValidationError",
          "NF002"
        );
      }

      const addFavorite = await userManager.removeFavorite(userId, animalId);
      if (addFavorite.modifiedCount === 1) {
        res.status(200).json({ message: "animal removed successfully" });
      }
    } catch (error) {
      res.status(500).json({ message: `${error.code} ${error.message}` });
    }
  },
};

module.exports = userRegister;
