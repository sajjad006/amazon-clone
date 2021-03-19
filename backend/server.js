const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

require("dotenv").config();
PORT = process.env.PORT || 5000;

// body parsing middleware
app.use(cors())
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

// /api routes
app.use("/api/products", require("./routes/api/products"));
app.use("/api/users", require('./routes/api/users'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
