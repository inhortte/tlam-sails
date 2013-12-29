/**
 * RtAnimal
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  autoPK: true,
  tableName: 'rt_animal',
  attributes: {
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
    }
  }

};
