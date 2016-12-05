var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// import models with application
var User = require('../models/user');

// add local Strategy
passport.use(new LocalStrategy(
    function(username, password, callback) {
        
    }
))