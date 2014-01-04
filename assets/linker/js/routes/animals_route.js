var AnimalsRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('animals', {into: 'application'});
  }
});

module.exports = AnimalsRoute;
