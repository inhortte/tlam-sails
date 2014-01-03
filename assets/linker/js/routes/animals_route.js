var AnimalsRoute = Ember.Route.extend({
  model: function(params, queryParams) {
    console.log('AnimalsRoute.model');
    return this.store.find('animal');
  }
});

module.exports = AnimalsRoute;
