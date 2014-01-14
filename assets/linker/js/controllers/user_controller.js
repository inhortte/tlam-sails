var UserController = Ember.ObjectController.extend({
  currentUser: function() {
                 console.log('UserController.currentUser');
                 return this.store.find('user');
                   /*
                          .then(function(user) {
                            console.log('got user ...');
                            console.log(JSON.stringify(user));
                            this.session.set('user', user);
                            return user;
                          });
                    */
               }.property()
});

module.exports = UserController;
