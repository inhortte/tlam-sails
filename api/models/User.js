/**
 * User
 *
 * @module      :: Model
 * @description :: He who can log in and do stuff.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

/* global User */

var ModelUtils = require('../../lib/ModelUtils');
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    login: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    }
  },
  toJSON: function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if(err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          ModelUtils.nextId(User, function(id) {
            user.id = id;
            cb(null, user);
          });
        }
      });
    });
  }
};
