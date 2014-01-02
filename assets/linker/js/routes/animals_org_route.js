var AnimalsOrgRoute = Ember.Route.extend({
  model: this.store.find('animal')
});
