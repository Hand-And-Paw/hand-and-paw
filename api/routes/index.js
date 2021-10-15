const express = require("express");

const routes = express.Router();

// require routes files
const userSubscription = require("./sub-routes/subscriber");
const login = require("./sub-routes/login");

// use them with this router
routes.use("/user-subscriber", userSubscription);
routes.use("/login", login);

// export the routes
module.exports = routes;
