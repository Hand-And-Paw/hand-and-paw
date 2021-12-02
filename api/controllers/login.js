/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const validator = require("validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashCreator = require("../utils/hash");
const databaseAccess = require("../data-access/users");

const loginController = {
  addUserLogin: async (req, res) => {
    try {
      const { email } = req.body;
      // check if email is well formatted

      if (!validator.isEmail(email)) {
        res.status(401).json({ message: "You have to enter a valid mail" });
        return;
      }
      // check if user do not enter the password
      const password = hashCreator(req.body.password);
      const hashEmpty = hashCreator("");
      if (password === hashEmpty) {
        res.status(401).json({ message: "password is required" });
        return;
      }
      // check if user do not enter the email
      if (!email) {
        res.status(401).json({ message: "email is required" });
        return;
      }
      // check if user exist
      const userRegistered = await databaseAccess.findUserLog(email, password);

      if (userRegistered.length === 0) {
        res.status(401).json({ message: "You need to register to login" });
        return;
      }
      const user = {
        userId: userRegistered[0]._id,
        userName: userRegistered[0].name,
        userEmail: userRegistered[0].email,
      };
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

      return res
        .cookie("access_token", accessToken, {
          httpOnly: true,
          sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
          secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({ message: "welcome", user });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
};

module.exports = loginController;
