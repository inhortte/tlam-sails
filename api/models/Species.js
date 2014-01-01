/**
 * Species
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

/* global Species */

var ModelUtils = require('../../lib/ModelUtils');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
  },
  beforeCreate: function(vals, next) {
    ModelUtils.nextId(Species, function(id) {
      vals.id = id;
      next();
    });
  }
};
