var TopmartenController = Ember.Controller.extend({
  currentUser: {},
  menu: [{name: 'Radiotracking'}, {name: 'Field Cameras'}, {name: 'Captive Breeding'}],
  fetchUser: function() {
               var that = this;
               console.log('TopmartenController.fetchUser');
               var users = this.store.find('user').then(function(user) {
                             console.log('TopmartenController, promise - then');
                             that.set('currentUser', user);
                             return user;
                           }, function(err) {
                                console.log('an error occured...');
                              });
               return users;
             }.property(),
  currentUserLogin: function() {
                      this.get('fetchUser');
                      if(this.get('currentUser').login === undefined) {
                        var pendings = [ 'Vacillating...', 'Ululating...',
                                         'Oscillating...', 'Undulating...' ];
                        return pendings[Math.floor(Math.random() * pendings.length)];
                      } else {
                        var user = this.get('currentUser');
                        return user.login;
                      }
  }.property('currentUser', 'fetchUser')
});

module.exports = TopmartenController;
