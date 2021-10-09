/* eslint-disable no-underscore-dangle */
const subscriberManager = require("../business-logic/person-subscription");
const hashCreator = require("../utils/hash");
const databaseAccess = require("../data-access/person-subscription");

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
      console.log(req.file);
      const { id } = req.params;
      const newData = req.body;
      if (newData._id !== id) {
        throw Error("Cannot change channel ID after creation!");
      }
      const updateSubscriber = await subscriberManager.updateSubscriber(
        newData
      );
      res.status(200).send(updateSubscriber);
    } catch (error) {
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
      console.log(dbSubscriber);
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
