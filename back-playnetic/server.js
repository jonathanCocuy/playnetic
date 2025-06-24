const express = require("express");
const app = express();
const PORT = 3000;

app.get("/home", (req, res) => {
  res.send("SERVER IN WORKS")
});

app.listen(PORT, () => {
  console.log("Server on PORT", PORT);
});
