var AnimalsIndexController = Ember.ArrayController.extend({
  thurk: function() {
           console.log('AnimalsIndexController.thurk');
           return [{twat: "tumor"}];
  }.property()
});

module.exports = AnimalsIndexController;
