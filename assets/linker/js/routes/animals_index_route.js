var AnimalsIndexRoute = Ember.Route.extend({
  model: function(params, queryParams) {
    console.log('AnimalsIndexRoute.model');
    return this.store.find('animal');
  },
  renderTemplate: function() {
    this._super();
    var animalsIndexController = this.controllerFor('animals_index');
    console.log(animalsIndexController);
//    this.render('animals/index', {controller: animalsIndexController, into: 'animals'});
  }
});

module.exports = AnimalsIndexRoute;
