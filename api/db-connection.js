const mongoose = require("mongoose");
const config = require("./config");

mongoose.set("runValidators", true); // here is your global setting

mongoose.connect(config.DB_PATH, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to mongoose"));

module.exports = db;
