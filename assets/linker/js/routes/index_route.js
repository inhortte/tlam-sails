var IndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin).extend({
  redirect: function() {
    this.transitionTo('animals');
  }
});

module.exports = IndexRoute;
