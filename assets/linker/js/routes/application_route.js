var ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin, {
  beforeModel: function() {
    console.log('ApplicationRoute.beforeModel');
  },
  setupController: function(controller) {
    controller.set('hoopla', "Think Like A Mink");
    controller.set('balderdash', "I like kicking voles.");
    controller.set('loggedIn', false);
  },
  renderTemplate: function() {
    this._super();
    var topmartenController = this.controllerFor('topmarten');
//    var userController = this.controllerFor('user');
    this.render('topmarten', {outlet: 'topmarten', controller: topmartenController, into: 'application'});
//    this.render('user', {outlet: 'user', controller: userController, into: 'topmarten'});
  }
});

module.exports = ApplicationRoute;
