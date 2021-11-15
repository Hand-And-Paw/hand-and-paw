/* eslint-disable max-classes-per-file */
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}

class CustomError extends Error {
  constructor(message, type, code) {
    super(message);
    this.name = `${type}:`;
    this.code = `${code}:`;
  }
}

module.exports = CustomError;
