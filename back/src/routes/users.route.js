const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/users", async (req, res) => {
  const user = await db.query("SELECT * FROM users");
  res.json(user);
});

module.exports = router;