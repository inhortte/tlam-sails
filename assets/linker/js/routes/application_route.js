var ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('hoopla', "Think Like A Mink");
    controller.set('balderdash', "I like kicking voles.");
  },
  renderTemplate: function() {
    this._super();
//    console.log('ApplicationRoute.renderTemplate');
//    var animalsController = this.controllerFor('animals');
//    this.render('animals', {outlet: 'animals', controller: animalsController, into: 'application'});
  }
});

module.exports = ApplicationRoute;
