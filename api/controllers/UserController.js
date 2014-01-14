/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var jwt = require('jwt-simple');

module.exports = {
  find: function(req, res) {
    console.log('########## REQ HEADERS');
    console.log(JSON.stringify(req.headers));
    if(req.headers.authorization) {
      var user = JSON.parse(jwt.decode(req.headers.authorization.substr(7), 'thurk'));
      console.log(JSON.parse(jwt.decode(req.headers.authorization.substr(7), 'thurk')));
      res.json({ user: user });
    }
    res.json({user: null});
  },
  _config: {
    blueprints: {
      actions: false,
      rest: false,
      shortcuts: false
    }
  }
};
