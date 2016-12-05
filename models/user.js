// load packages
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Define user schema
var UserSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})