/**
 * Section
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

/* global Section */

var ModelUtils = require('../../lib/ModelUtils');

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    abbr: {
      type: 'STRING',
      max: 2,
      required: true
    },
    name: {
      type: 'STRING',
      required: true
    },
    baseUrl: 'STRING'
  },
  beforeCreate: function(vals, next) {
    ModelUtils.nextId(Section, function(id) {
      vals.id = id;
      next();
    });
  }
};
