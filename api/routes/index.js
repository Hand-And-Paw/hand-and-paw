const express = require("express");

const routes = express.Router();

// require routes files
const userSubscription = require("./sub-routes/subscriber");

// use them with this router
routes.use("/user-subscriber", userSubscription);

// export the routes
module.exports = routes;
