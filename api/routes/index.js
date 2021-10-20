const express = require("express");

const routes = express.Router();

// require routes files
const userRegister = require("./sub-routes/user-register");
const login = require("./sub-routes/login");
const publishAnimal = require("./sub-routes/publish-animal");

// use them with this router
routes.use("/user-register", userRegister);
routes.use("/login", login);
routes.use("/publish-animal", publishAnimal);

// export the routes
module.exports = routes;
