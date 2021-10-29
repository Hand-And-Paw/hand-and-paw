const multer = require("multer");
const uuid = require("uuid");
const path = require("path");

const storageImage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/assets/images/animal-uploads/");
  },
  filename: (req, file, cb) => {
    // eslint-disable-next-line prefer-template
    cb(null, uuid.v4() + path.extname(file.originalname));
  },
});

const imageFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({
  storage: storageImage,
  limits: {
    fileSize: 3024 * 3024,
  },
  fileFilter: imageFilter,
});

module.exports = upload;
