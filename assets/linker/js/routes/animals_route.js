var AnimalsRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin).extend({
  renderTemplate: function() {
    console.log('AnimalsRoute.renderTemplate');
    this.render('animals', {into: 'application'});
  }
});

module.exports = AnimalsRoute;
