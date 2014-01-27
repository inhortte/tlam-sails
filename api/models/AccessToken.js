/**
 * AccessToken
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

/* global AccessToken */
/* global User */

var ModelUtils = require('../../lib/ModelUtils');
var jwt = require('jwt-simple');

module.exports = {
  tableName: 'access_token',
  attributes: {
    access_token: {
      type: 'string',
      required: true
    },
    token_type: {
      type: 'string',
      required: true
    },
    user_id: {
      type: 'integer',
      required: true
    },
    expiry: {
      type: 'integer',
      required: true
    },
    salty: {
      type: 'string',
      defaultsTo: 'thurk',
      required: true
    },
    user: function(cb) {
      if(this.user_id) {
        User.findOne({id: this.user_id}, function(err, user) {
          if(err) {
            cb(null);
          } else {
            cb(user.toJSON());
          }
        });
      } else {
        cb(null);
      }
    }
  },
  beforeCreate: function(vals, next) {
    ModelUtils.nextId(AccessToken, function(id) {
      vals.id = id;
      vals.access_token = jwt.encode(vals.access_token, vals.salty);
      next();
    });
  }
};
