ENV = {FEATURES: {"query-params": true}};

// require other, dependencies here, ie:
// require('./vendor/moment');

require('../vendor/jquery');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data'); // delete if you don't want ember-data
require('../vendor/bootstrap');
var moment = require('../vendor/moment-with-langs.js');

var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.Moment = moment;
// App.Store = require('./store'); // delete if you don't want ember-data

module.exports = App;
