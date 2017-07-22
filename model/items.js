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
    age: Number,
    about: String,
});

//export our module to use in server.js
module.exports = mongoose.model('Item', ItemsSchema);
