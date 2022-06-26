const mongoose = require("mongoose");
//We are going to use mongoose.Schema a bit so saves us a little time saving to a variable. 
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
})

//Take the schema and tell mongoose I want to make a model. 
module.export = mongoose.model('Campground', CampgroundSchema);