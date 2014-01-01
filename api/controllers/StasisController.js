/**
 * StasisController
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

/* global Stasis */

module.exports = {

  bySection: function(req, res) {
    console.log(req.param('section'));
    Stasis.find({
      section: req.param('section')
    }).done(function(err, ssvs) {
      res.json(ssvs);
    });
  },
  bySectionAndName: function(req, res) {
    var section = req.param('section');
    var name = req.param('name');
    Stasis.find({
      section: section,
      name: name
    }).done(function(err, ssvs) {
      res.json(ssvs);
    });
  },
  setChoices: function(req,res) {
    console.log('section -> ' + req.param('section'));
    console.log('name -> ' + req.param('name'));
    console.log('choices -> ' + JSON.stringify(req.param('choices')));
    res.json({status: 'ook!'});
    // must reset all of the radiotracking data with new choice ids.
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to StasisController)
   */
  _config: {
    blueprints:{
      actions: false,
      rest: false,
      shortcuts: false
    }
  }

};
