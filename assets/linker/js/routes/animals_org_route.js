var AnimalsOrgRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin).extend({
  model: function(params, queryParams) {
    return this.store.find('animal');
  }
});

module.exports = AnimalsOrgRoute;
