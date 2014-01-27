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

/* global AccessToken */


// var jwt = require('jwt-simple');

module.exports = {
  find: function(req, res) {
    console.log('########## REQ HEADERS');
    console.log(JSON.stringify(req.headers.authorization));
    if(req.headers.authorization) {
      AccessToken.findOne({access_token: req.headers.authorization.substr(7)}, function(err, at) {
        if(err) {
          console.log('Error finding access token "' + req.hearders.authorization.substr(7));
          res.json({ user: null });
        } else {
          at.user(function(user) {
            var hovno = { user: user };
            console.log("User found - \n" + JSON.stringify(hovno));
            res.json({ user: user });
          });
        }
      });
    } else {
      console.log('Header no tiene authentication, vole.');
      res.json({user: null});
    }
  },
  _config: {
    blueprints: {
      actions: false,
      rest: false,
      shortcuts: false
    }
  }
};
