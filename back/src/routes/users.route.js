const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/users", async (req, res) => {
  const [user] = await db.query("SELECT id, user_name, user_email, user_status FROM users");
  res.json(user);
});

router.post("/users", async(req, res) => {
  try {
    const { user_name, last_name, user_email, user_password } = req.body;
    const [result] = await db.query("INSERT INTO users (user_name, last_name, user_email, user_password) VALUES (?, ?, ?, ?)", 
      [user_name, last_name, user_email, user_password]);
    res.json({
        id: result.insertId,
        user_name,
        last_name,
        user_email
    });
  } catch (error) {
    res.status(500).json({"message": "Error to create user", error})
  }
});

module.exports = router;