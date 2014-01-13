var LoginController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin).extend({
  /*
  loginFailed: false,
  isProcessing: false,
  isSlowConnection: false,
  timeout: null,
  slowConnection: function() {
    this.set('isSlowConnection', true);
  },
  reset: function() {
    clearTimeout(this.get('timeout'));
    this.setProperties({
      isProcessing: false,
      isSlowConnection: false
    });
  },
  success: function() {
    this.reset();
    this.set('loginFailed', false);
    console.log("login successful");
  },
  failure: function() {
    this.reset();
    this.set('loginFailed', true);
  },
   */
  actions: {
    /*
    login: function() {
      this.setProperties({
        loginFailed: false,
        isProcessing: true
      });

      if(this.session.isAuthenticated) {
        console.log('Greetings!');
      }

      /*
      this.auth.signIn({
        data: this.getProperties('login', 'password')
      }).then(function(response) {
        console.log('success....' + JSON.stringify(response));
      }, function(err) {
           console.log('failure...' + JSON.stringify(err));
         });
       */
      // this.set('timeout', setTimeout(this.slowConnection, 5000));
      /*
      var that = this;
      $.post("/login", this.getProperties('login', 'password')).then(function(response) {
        that.set('isProcessing', false);
        if(response.login) {
          that.success();
        } else {
          that.failure();
        }
      }, function(err) {
           that.failure();
         });
       */
//    }
  }
});

module.exports = LoginController;
