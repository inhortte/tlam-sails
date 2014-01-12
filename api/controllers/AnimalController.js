/**
 * RtAnimalController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

/* global Animal */

var ModelUtils = require('../../lib/ModelUtils');
var async = require('async');

module.exports = {

  find: function(req, res) {
    if(req.param('id')) {
      Animal.findOne(parseInt(req.param('id'), 10)).done(function(err, animal) {
        if(err) { res.json(null); }
        ModelUtils.getSpecies(animal, function(animal) {
          ModelUtils.getProject(animal, function(animal) {
            res.json({animal: animal});
          });
        });
      });
    } else {
      // organise by birth date.
      Animal.find({sort: 'birthdate asc'}).done(function(err, animals) {
        if(err || !animals) { res.json({animals: []}); }
        async.map(animals, function(animal, cb) {
          ModelUtils.getSpecies(animal, function(animal) {
            ModelUtils.getProject(animal, function(animal) {
              cb(null, animal);
            });
          });
        }, function(err, animals) {
             console.log("#####################" + JSON.stringify(animals[0]));
             res.json({animals: animals});
           });
      });
    }
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to RtAnimalController)
   */
  _config: {
    blueprints: {
      actions: false,
      rest: false,
      shortcuts: false
    }
  }
};
