var ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin).extend({
  setupController: function(controller) {
    controller.set('hoopla', "Think Like A Mink");
    controller.set('balderdash', "I like kicking voles.");
    controller.set('loggedIn', false);
  },
  renderTemplate: function() {
    this._super();
    var topmartenController = this.controllerFor('topmarten');
    this.render('topmarten', {outlet: 'topmarten', controller: topmartenController, into: 'application'});
  }
});

module.exports = ApplicationRoute;
