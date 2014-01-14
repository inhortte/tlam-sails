var AnimalsNewRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin).extend({
  model: function() {
    console.log('AnimalsNewRoute.model');
    return {};
  }
});

module.exports = AnimalsNewRoute;
