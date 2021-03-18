const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();
PORT = process.env.PORT || 5000;

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db connection
const DB_URI = process.env.MONGO_URI;
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => {
  res.send("hello world");
});

// /api/products rout
app.use("/api/products", require("./routes/api/products"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
