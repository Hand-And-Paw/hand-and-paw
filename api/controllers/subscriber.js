/* eslint-disable no-undefined */
/* eslint-disable no-buffer-constructor */
/* eslint-disable no-underscore-dangle */

const subscriberManager = require("../business-logic/subscriber");
const hashCreator = require("../utils/hash");
const databaseAccess = require("../data-access/subscriber");

const personSubscription = {
  getAllUsers: async (req, res) => {
    try {
      const subscribers = await subscriberManager.getAllSubscribers();
      res.status(200).send(subscribers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const subscriber = await subscriberManager.getSubscriber(id);
      res.status(200).send(subscriber);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const newData = req.body;
      if (newData.id !== id) {
        throw Error("Cannot change subscriber ID after creation!");
      }
      // check old password before update the newOne
      if (newData.newPassword && newData.oldPassword) {
        const subscriber = await subscriberManager.getSubscriber(id);
        const newPassword = hashCreator(req.body.newPassword);
        const oldPassword = hashCreator(req.body.oldPassword);
        if (subscriber[0].password !== oldPassword) {
          throw Error("Old password incorrect!");
        } else {
          newData.password = newPassword;
        }
      }
      // check if user update the email
      if (newData.email !== newData.repeatEmail) {
        throw Error("Emails do not match!");
      }

      // if there is an image uploaded
      if (req.file !== undefined) {
        await subscriberManager.updateSubscriber(newData, req.file.filename);
        const subscriberUpdated = await subscriberManager.getSubscriber(id);
        res.status(200).send(subscriberUpdated);
        return;
      }
      await subscriberManager.updateSubscriber(newData);
      // return updated object
      const subscriberUpdated = await subscriberManager.getSubscriber(id);
      res.status(200).send(subscriberUpdated);
    } catch (error) {
      // if any error ,make sure multer doesn't store image
      if (req.file) {
        await subscriberManager.deleteImage(req.file.filename);
      }
      res.status(401).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      const userDeleted = await subscriberManager.removeSubscriber(id);
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
      const dbSubscriber = await databaseAccess.findUserByEmail(userEmail);
      if (dbSubscriber.length !== 0) {
        throw new Error(
          `Cannot create user with the email: ${dbSubscriber[0].email}, already exists`
        );
      }
      const newUser = {
        name: username,
        password: userPassword,
        email: userEmail,
      };
      const newSubscription = await subscriberManager.createSubscriber(newUser);

      res.status(201).json(newSubscription);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = personSubscription;
