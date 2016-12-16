// load packages
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Define user schema
var UserSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})

// middleware before save
UserSchema.pre('save', function(next) {
    var user = this;

})

module.exports = mongoose.model('User', UserSchema);