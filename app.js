const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const Campground = require('./models/campground');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const app = express();

//Setting view engine to ejs
//We use path.join to allow us to run the application from anywhere. Not just while in the folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

// app.get("/makecampground", async (req, res) => {
//   const camp = new Campground({
//     title: 'My Backyard',
//     description: 'Cheap camping'
//   })
//   await camp.save();
//   res.send(camp)
// });

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
