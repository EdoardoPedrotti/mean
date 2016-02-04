/**
 * Created by edoardopedrotti on 14/01/16.
 */
exports.render = function (req, res) {

	if (req.session.lastVisit) {
		console.log('last visit: ', req.session.lastVisit);
	}

	req.session.lastVisit = new Date();

	res.render('index', {
		title: 'Hello motherfuasdk!',
		userFullName: req.user ? req.user.fullName : ''
	});
};