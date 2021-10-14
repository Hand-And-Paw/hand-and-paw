const crypto = require("crypto");

/**
 *
 * - @param {input = ""} The string to be hashed.
 * - @returns 'unique string with the password encoded'.
 *
 */

const hashCreator = (input = "") => {
  return crypto.createHash("sha1").update(input).digest("hex");
};

module.exports = hashCreator;
