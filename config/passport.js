/* global User */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

passport.serializeUser(function(user, cb){
  cb(null, user[0].id);
});
passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});
passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'password'
  }, function(login, password, cb) {
       User.findByLogin(login).done(function(err, user) {
         if(err) { cb(null, err); }
         console.log('passport is looking for the user ....' + "\n" + JSON.stringify(user));
         if(!user || user.length < 1) {
           return cb(null, false, { message: 'I apologize, but you do not exist.'});
         }
         bcrypt.compare(password, user[0].password, function(err, res) {
           if(!res) {
             return cb(null, false, { message: 'You have been consigned to purgatory.'});
           }
           console.log('passport has authorized the user');
           return cb(null, user);
         });
       });
     }
));

module.exports = {
  express: {
    customMiddleware: function(app) {
      console.log('Passport initializing...');
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};
