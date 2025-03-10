const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access Denied! No Token Provided" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Store user info for later use
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = authenticateJWT;
