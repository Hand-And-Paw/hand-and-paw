const express = require("express");

const logoutRoute = express.Router();

const logoutController = require("../../controllers/logout");

logoutRoute.get("/", logoutController.logout);

module.exports = logoutRoute;
