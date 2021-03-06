/**
 * Created by edoardopedrotti on 14/01/16.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'developement';

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);
console.log('server is running at http://localhost:3000/');

module.exports = app;