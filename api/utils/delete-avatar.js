const path = require("path");
const fs = require("fs");

const deleteImageAsync = async (fileName) => {
  fs.unlink(
    path.join(
      __dirname,
      "..",
      "..",
      "client",
      "public",
      "avatar-uploads",
      `${fileName}`
    ),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`\nDeleted file: ${fileName}`);
      }
    }
  );
};

const deleteImageSync = (fileName) => {
  fs.unlink(
    path.join(
      __dirname,
      "..",
      "..",
      "client",
      "public",
      "avatar-uploads",
      `${fileName}`
    ),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`\nDeleted file: ${fileName}`);
      }
    }
  );
};

module.exports = {
  deleteImageAsync,
  deleteImageSync,
};
