/**
 * Created by edoardopedrotti on 14/01/16.
 */
module.exports  = function(app) {
	var index = require('../controllers/index.server.controller');
	app.get('/', index.render);
};