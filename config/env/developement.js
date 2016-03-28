/**
 * Created by edoardopedrotti on 14/01/16.
 */
module.exports = {
	db: 'mongodb://localhost/mean-book',
	sessionSecret: 'developementSessionSecret',
	facebook: {
		clientID: '243139132686651',
		clientSecret: 'c073811b16700c95e38348db92f581fe',
		callbackUrl: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'cG6OxZxet7HRX2vuWvw4ZihNU',
		clientSecret: '67TNbvSyoBwwsiO41nkz8CZPYssxp8pVgbgUcUE3tG35hwNNwr',
		callbackUrl: 'http://127.0.0.1:3000/oauth/twitter/callback'
	},
	google: {
		clientId: "Application Id",
		clientSecret: "Application Secret",
		callbackURL: 'http://localhost:3000/oaut/google/callback'
	}

};