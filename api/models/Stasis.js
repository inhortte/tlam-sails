/**
 * Stasis
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  autoPK: false,

  attributes: {
    section: {
      type: 'STRING',
      max: 2,
      required: true
    },
    name: {
      type: 'STRING',
      required: true
    },
    text: {
      type: 'STRING',
      required: true
    },
    choices: {
      type: 'ARRAY'
    }
  }

};
