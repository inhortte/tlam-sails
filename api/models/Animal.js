/**
 * RtAnimal
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

/* global Species */
/* global Project */
/* global Animal */

var ModelUtils = require('../../lib/ModelUtils');

module.exports = {
  autoPK: true,
  tableName: 'animal',
  attributes: {
    species_id: {
      type: 'integer',
      required: true
    },
    project_id: {
      type: 'integer'
    },
    animal_id: {
      type: 'integer',
      defaultsTo: 0
    },
    frequency: {
      type: 'integer',
      required: true
    },
    nickname: {
      type: 'string'
    },
    sex: {
      type: 'string',
      required: true
    },
    birthdate: {
      type: 'date',
      required: true
    },
    release_date: {
      type: 'datetime'
    },
    microchip: {
      type: 'integer'
    },
    enclosure_type: {
      type: 'string'
    },
    release_site: {
      type: 'string'
    },
    remarks: {
      type: 'string'
    },
    release_location_N: {
      type: 'float',
      defaultsTo: 0.0
    },
    release_location_E: {
      type: 'float',
      defaultsTo: 0.0
    },
    deathdate: {
      type: 'datetime'
    },
    cause_of_death: {
      type: 'string'
    },
    species: function(cb) {
      Species.findOne(this.species_id).done(function(err, sp) {
        if(err) {
          cb(null);
        } else {
          cb(sp);
        }
      });
    },
    project: function() {
      Project.findOne(this.species_id).done(function(err, p) {
        if(err) {
          return null;
        } else {
          return p;
        }
      });
    }
  },
  beforeCreate: function(vals, next) {
    ModelUtils.nextId(Animal, function(id) {
      vals.id = id;
      next();
    });
  }
};
