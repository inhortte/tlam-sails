/**
 * ProjectController
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
/* global Project */
/* global Animal */

var async = require('async');

function getOrganization(project, cb) {
  Organization.findOne(project.organization_id).done(function(err, o) {
    if(err || !o) {
      project.organization = null;
    } else {
      project.organization = o;
    }
    cb(project);
  });
}
function getAnimals(project, cb) {
  Animal.find().where({project_id: project.id}).sort({birthdate: 'asc'}).done(function(err, animals) {
    if(err || !animals) {
      project.animals = [];
    } else {
      project.animals = animals;
    }
    cb(project);
  });
}

module.exports = {
  find: function(req, res) {
    if(req.param('id')) {
      Project.findOne(parseInt(req.param('id'), 10)).done(function(err, project) {
        if(err) { res.json(null); }
        getOrganization(project, function(project) {
          getAnimals(project, function(project) {
            res.json({project: project});
          });
        });
      });
    } else {
      Project.find().sort('organization_id').sort({ createdAt: 'asc'}).done(function(err, projects) {
        if(err) { res.json({projects: []}); }
        async.map(projects, function(project, cb) {
          getOrganization(project, function(project) {
            cb(null, project);
          });
        }, function(err, projects) {
             res.json({projects: projects});
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
