const express = require("express");
require("dotenv").config();

const emailRoute = express.Router();
const emailController = require("../../controllers/emails");

//
emailRoute.post("/contact-us", emailController.sendContactEmail);
emailRoute.post("/contact-giver", emailController.sendMessageToGiver);

module.exports = emailRoute;
