const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const usersRoutes = require("./src/routes/users.route");

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", usersRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
}); 