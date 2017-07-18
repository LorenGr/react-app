'use strict';

var mongoose = require('mongoose');

//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.

var ItemsSchema = new mongoose.Schema({
    full_name: String,
    photo: String,
    location: String,
    email: String,
    telephone: Number,
    contact_method: String,
    hourly_rate: Number,
    available_hours: String,
    available_days: String,
    age: Number,
    about: String,
    breed_exceptions: String,
    max_dogs: Number
});

//export our module to use in server.js
module.exports = mongoose.model('Item', ItemsSchema);
