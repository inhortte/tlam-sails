/**
 * RefreshToken
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

/* global RefreshToken */

var ModelUtils = require('../../lib/ModelUtils');
var jwt = require('jwt-simple');

module.exports = {
  tableName: 'refresh_token',
  attributes: {
    access_token_id: {
      type: 'integer',
      required: true
    },
    token_type: {
      type: 'string'
    },
    refresh_token: {
      type: 'string',
      required: true
    },
    expiry: {
      type: 'integer',
      required: true
    },
    salty: {
      type: 'string',
      defaultsTo: 'smafco',
      required: true
    }
  },
  beforeCreate: function(vals, next) {
    ModelUtils.nextId(RefreshToken, function(id) {
      vals.id = id;
      vals.refresh_token = jwt.encode(vals.refresh_token, vals.salty);
      next();
    });
  }
};
