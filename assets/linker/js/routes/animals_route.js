var AnimalsRoute = Ember.Route.extend({
  model: this.store.find('animal')
});
