const path = require("path");
const fs = require("fs");

const deleteImageAsync = async (fileName, imageFolder) => {
  fs.unlink(
    path.join(
      __dirname,
      "..",
      "..",
      "client",
      "public",
      `${imageFolder}`,
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

const deleteImageSync = (fileName, imageFolder) => {
  fs.unlink(
    path.join(
      __dirname,
      "..",
      "..",
      "client",
      "public",
      `${imageFolder}`,
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
