const express = require("express");

const routes = express.Router();

// require routes files
const usersRoutes = require("./sub-routes/users");
const login = require("./sub-routes/login");
const logout = require("./sub-routes/logout");
const animalsRoutes = require("./sub-routes/animals");
const emailsRoute = require("./sub-routes/emails");

// use them with this router
routes.use("/users", usersRoutes);
routes.use("/login", login);
routes.use("/logout", logout);
routes.use("/animals", animalsRoutes);
routes.use("/emails", emailsRoute);

// export the routes
module.exports = routes;
