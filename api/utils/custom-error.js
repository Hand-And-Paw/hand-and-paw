/* eslint-disable max-classes-per-file */
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}

class CustomError extends Error {
  constructor(message, code) {
    super(message); // (1)
    this.name = `(${code}):`; // (2)
  }
}

module.exports = CustomError;
