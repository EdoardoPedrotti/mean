/**
 * Created by edoardopedrotti on 15/01/16.
 */
var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');

module.exports = function (app) {
	app.route('/signup')
		.get(users.renderSignup)
		.post(users.signup);

	app.route('/signin')
		.get(users.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));

	app.get('/signout', users.signout);

	app.route('/users').post(users.create)
		.get(users.list);

	app.get('/oauth/facebook', passport.authenticate('facebook', {failureRedirect: '/signin'}));
	app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		faiuluerRedirect: '/signin',
		successRedirect: '/'
	}));

	app.get('/oauth/twitter', passport.authenticate('twitter', {failureRedirect:'/signin'}));
	app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect:'/signin',
		succesredirect: '/'
	}));

	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);

	app.param('userId', users.userByID);
};

