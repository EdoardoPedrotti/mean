/**
 * Created by edoardopedrotti on 28/02/16.
 */
var passport = require('passport');
var url = require('url');
var TwitterStrategy = require('passport-twitter').Strategy;
var config = require('../config');
var users = require('../../app/controllers/users.server.controller');

module.exports = function () {
	passport.use(new TwitterStrategy({
		consumerKey: config.twitter.clientID,
		consumerSecret: config.twitter.clientSecret,
		callbackURL: config.twitter.callbackURL,
		passReqToCallback: true
	}, function (req, token, tokenSecret, profile, done) {
		var providerData = profiel._json;
		providerData.token = token;
		providerDatatokeSecret = tokenSecret;

		var providerUserProfile = {
			fullName: profile.displayName,
			username: profile.username,
			provider: 'twitter',
			providerData: providerData
		};

		users.saveOAuthUsersProfiel(req, providerData, done);
	}));
};