var AnimalsRoute = Ember.Route.extend({
  renderTemplate: function() {
    console.log('AnimalsRoute.renderTemplate');
    this.render('animals', {into: 'application'});
  }
});

module.exports = AnimalsRoute;
