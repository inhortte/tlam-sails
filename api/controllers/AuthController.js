/**
 * AuthController
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

var passport = require('passport');
var jwt = require('jwt-simple');

module.exports = {
  /* No view.... ember does that hovno ...
  login: function(req, res) {
    if(req.isAuthenticated()) {
      res.view('home/index');
    } else {
      res.view('auth/login', { message: req.message });
    }
  },
   */
  process: function(req, res) {
    console.log('############### AuthController.process!');
    passport.authenticate('local', { session: false }, function(err, user /*, info */) {
      if(err || (!user)) {
        res.status(400).json({login: false});
        return {login: false};
      }
      req.logIn(user, function(err) {
        if(err) {
          res.status(400).json({login: false});
          return {login: false};
        }
        res.status(200).json({login: jwt.encode(user[0], 'thurk')});
        return {login: user};
      });
    })(req, res);
  },
  logout: function(req, res) {
    req.logout();
    res.send('penguin?');
  },
  _config: {
    blueprints: {
      actions: false,
      rest: false,
      shortcuts: false
    }
  }
};
