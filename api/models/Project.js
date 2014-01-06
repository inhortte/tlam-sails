/**
 * Project
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

/* global Project */

var ModelUtils = require('../../lib/ModelUtils');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    abbr: {
      type: 'string',
      max: 2
    },
    organization_id: {
      type: 'integer',
      required: true
    }
  },
  beforeCreate: function(vals, next) {
    ModelUtils.nextId(Project, function(id) {
      vals.id = id;
      next();
    });
  }
};
