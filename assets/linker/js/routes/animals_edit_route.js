var AnimalsEditRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin).extend({
  model: function(params) {
    console.log('AnimalsEditRoute.model');
    return this.store.find('animal', params.id);
  },
  renderTemplate: function() {
    console.log('AnimalsEditRoute.renderTemplate');
    this.render('animals/edit', {into: 'animals'});
  }
});

module.exports = AnimalsEditRoute;
