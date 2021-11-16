const jwt = require("jsonwebtoken");

/**
 *
 * Checks the token created while user login.
 *
 * @returns Rejection error if token no valid.
 */

const tokenChecker = async (req, res, next) => {
  try {
    // const authHeader = req.headers.authorization;

    // const token = authHeader && authHeader.split(" ")[1];
    const token = req.cookies.access_token;

    console.log(token);

    if (!token) {
      res
        .status(401)
        .json({ message: "validation error, make sure you are registered!" });
      return;
    }

    const jwtChecker = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!jwtChecker) {
      res.status(403).json({ message: "Password incorrect!" });
      return;
    }
    next();
  } catch (error) {
    res.send(error);
  }
};

module.exports = tokenChecker;
