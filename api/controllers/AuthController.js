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

var AuthUtils = require('../../lib/AuthUtils.js');
var passport = require('passport');

module.exports = {
  // Going with what ember-simple-auth needs. The client/server API as specified for the "Resource Owner Password Credentials Grant" in RFC 6749 is actually quite simple.
  process: function(req, res) {
    // console.log('############### AuthController.process!' + "\n" + JSON.stringify(Object.keys(req)) + "\n" + JSON.stringify(req.sessionStore) + "\n" + JSON.stringify(req.body));
    passport.authenticate('local', { session: false }, function(err, user /*, info */) {
      res.set('Content-Type', 'application/json;charset=UTF-8');
      res.set('Cache-Control', 'no-store');
      res.set('Pragma', 'no-cache');
      if(err || (!user)) {
        if(err) { console.log("error: \n" + err); }
        console.log('no user.... or error...');
        res.status(400).json({
          error: 'invalid_grant'
        });
        return {
          error: 'invalid_grant'
        };
      }
      req.logIn(user, function() {
        /*
        if(err) {
          console.log('but there was an error...' + JSON.stringify(err));
          res.status(400).json({
            error: 'invalid_grant'
          });
          return {
            error: 'invalid_grant'
          };
        }
         */
        delete user[0].password;
        delete user[0].createdAt;
        delete user[0].updatedAt;
        console.log(user[0]);
        AuthUtils.newAccessToken(user[0], function(access_token) {
          AuthUtils.newRefreshToken(access_token, function(refresh_token) {
            AuthUtils.rfc6749Response(access_token, refresh_token, function(response) {
              res.status(200).json(response);
              return response;
            });
          });
        });
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
