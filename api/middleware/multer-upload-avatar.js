const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    // eslint-disable-next-line prefer-template
    cb(null, file.originalname);
  },
});

module.exports = storage;
