/**
 * Created by edoardopedrotti on 14/01/16.
 */
var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
	var db = mongoose.connect(config.db);

	require('../app/models/user.server.model');

	return db;
};