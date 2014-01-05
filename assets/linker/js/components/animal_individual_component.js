var AnimalIndividualComponent = Ember.Component.extend({
  actions: {
    bloat: function() {
      this.toggleProperty('bloated');
    }
  }
});

module.exports = AnimalIndividualComponent;
