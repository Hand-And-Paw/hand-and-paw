const fs = require("fs");
const path = require("path");

const writeImageAsync = async (fileName, imageFolder) => {
  fs.writeFileSync(
    path.join(
      __dirname,
      "..",
      "..",
      "client",
      "assets",
      "images",
      `${imageFolder}`,
      `${fileName}`
    ),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`\nwrited file: ${fileName}`);
      }
    }
  );
};

module.exports = writeImageAsync;
