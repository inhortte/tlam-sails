var App = require('./app');

App.Router.map(function() {
  this.resource('animals', function() {
    this.route('new');
  });
});
