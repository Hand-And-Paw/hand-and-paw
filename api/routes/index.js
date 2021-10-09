"use strict";

const express = require("express");

const routes = express.Router();

// require routes files
const personSubscription = require("./person-subscription");

// use them with this router
routes.use("/personSubscription", personSubscription);

// export the routes
module.exports = routes;
