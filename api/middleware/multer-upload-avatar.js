const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(
      null,
      path.join(__dirname, "..", "..", "client", "public", "avatar-img")
    );
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

module.exports = storage;
