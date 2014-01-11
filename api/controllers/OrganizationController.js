/**
 * OrganizationController
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

/* global Organization */

var ModelUtils = require('../../lib/ModelUtils');
var async = require('async');

module.exports = {
    find: function(req, res) {
    if(req.param('id')) {
      Organization.findOne(parseInt(req.param('id'), 10)).done(function(err, organization) {
        if(err) { res.json(null); }
        ModelUtils.getProjects(organization, function(organization) {
          res.json({organization: organization});
        });
      });
    } else {
      Organization.find().sort('organization_id').sort({ createdAt: 'asc'}).done(function(err, organizations) {
        if(err) { res.json({organizations: []}); }
        async.map(organizations, function(organization, cb) {
          ModelUtils.getProjects(organization, function(organization) {
            cb(null, organization);
          });
        }, function(err, organizations) {
             res.json({organizations: organizations});
           });
      });
    }
  },
  _config: {
    blueprints: {
      actions: false,
      rest: false,
      shortcuts: false
    }
  }
};
