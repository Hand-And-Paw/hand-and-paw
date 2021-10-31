module.exports = {
  MODE: "development",
  PORT: process.env.PORT || 3000,
  DATA_DIR: process.env.DATA_DIR,
  STATIC_DIR: process.env.STATIC_DIR || 'client',
  DB_PATH: process.env.DB_PATH || "mongodb://localhost/handAndPaw",
};
