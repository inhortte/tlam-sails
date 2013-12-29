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

module.exports = {

  bySection: function(req, res) {
    Stasis.find({
      section: req.param('section')
    }).done(function(err, ssvs) {
      res.send(ssvs);
    });
  },
  bySectionAndName: function(req, res) {
    var secname_arr = req.param('secname').split(':');
    var section = secname_arr[0];
    var name = secname_arr[1];
    console.log(section + ' --- ' + name);
    Stasis.find({
      section: section,
      name: name
    }).done(function(err, ssvs) {
      res.send(ssvs);
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to StasisController)
   */
  _config: {}

};
