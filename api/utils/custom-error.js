/* eslint-disable max-classes-per-file */
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}

class CustomError extends Error {
<<<<<<< HEAD
  constructor(message, type, code) {
    super(message);
    this.name = `${type}:`;
    this.code = `${code}:`;
=======
  constructor(message, code) {
    super(message); // (1)
    this.name = `(${code}):`; // (2)
>>>>>>> add error structure for users #191
  }
}

module.exports = CustomError;
