const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "ankit",
  password: "Ashu@2005",
  database: "alumni_management",
});

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });
};

// Login Route
router.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(400).json({ message: "User not found" });

    const user = results[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT Token
    const token = generateToken(user);
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  });
});

module.exports = router;
