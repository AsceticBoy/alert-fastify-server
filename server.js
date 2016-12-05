// load dependent packages
var path = require('path');
var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var log = require('./log');

// connect mongodb database with accountmanage
mongoose.connect('mongodb://localhost:27017/accountmanage');

// create express seerver
var app = express();

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// set request body with body-parser package 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

// initialize passport package
app.use(passport.initialize());

var router = express.Router();

// register log4js
log.use(app);

// set server port
app.listen(3000);

