var AnimalsController = Ember.ArrayController.extend({
  animals: function() {
    console.log('AnimalsController.animals');
    this.store.find('animal');
    return this.store.all('animal');
  }
});

module.exports = AnimalsController;
