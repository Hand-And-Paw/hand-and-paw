const express = require("express");

const loginRoute = express.Router();

const loginController = require("../../controllers/login");

loginRoute.post("/", loginController.addUserLogin);

module.exports = loginRoute;
