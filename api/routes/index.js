"use strict";

const express = require("express");

const routes = express.Router();

// require routes files
const userSubscription = require("./sub-routes/person-subscription");

// use them with this router
routes.use("/user-subscription", userSubscription);

// export the routes
module.exports = routes;
