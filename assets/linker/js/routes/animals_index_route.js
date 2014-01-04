var AnimalsIndexRoute = Ember.Route.extend({
  model: function(params, queryParams) {
    console.log('AnimalsIndexRoute.model');
    return this.store.find('animal');
  },
  renderTemplate: function() {
    this.render('animals/index', {into: 'animals'});
  }
});

module.exports = AnimalsIndexRoute;
