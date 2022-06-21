const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

//Setting view engine to ejs
//We use path.join to allow us to run the application from anywhere. Not just while in the folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});