Ember.Handlebars.helper('capitalizeAll', function(leper) {
  if(leper) {
    return leper.split(/\s+/).map(function(word) { return word[0].toUpperCase() + word.substring(1); }).join(' ');
  } else {
    return "hovno"
  }
});
