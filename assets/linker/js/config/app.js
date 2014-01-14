ENV = {FEATURES: {"query-params": true}};

// require other, dependencies here, ie:
// require('./vendor/moment');

require('../vendor/jquery');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data'); // delete if you don't want ember-data
require('../vendor/bootstrap');
//require('../vendor/ember-auth/ember-auth');
//require('../vendor/ember-auth-request-jquery/ember-auth-request-jquery');
require('../vendor/ember-simple-auth/ember-simple-auth');
var moment = require('../vendor/moment-with-langs.js');

Ember.Application.initializer({
  name: 'authentication',
  initialize: function(container, application) {
    Ember.SimpleAuth.setup(container, application);
  }
});
var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
/* For ember-auth
App.Auth = Ember.Auth.extend({ request: 'jquery',
                               response: 'json',
                               strategy: 'token',
                               tokenKey: 'auth_token',
                               tokenLocation: 'param',
                               session: 'cookie',
                               signInEndPoint: '/login',
                               signOutEndPoint: '/logout' });
*/
App.Moment = moment;
// App.Store = require('./store'); // delete if you don't want ember-data
Ember.Inflector.inflector.uncountable('user');

module.exports = App;
