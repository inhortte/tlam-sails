/* global Organization */
/* global Animal */
/* global Project */

var async = require('async');

// model will, at this point in development, be an instance of Project.
function getOrganization(model, cb) {
  Organization.findOne(model.organization_id).done(function(err, o) {
    if(err || !o) {
      model.organization = null;
    } else {
      model.organization = o;
    }
    cb(model);
  });
}

function getSpecies(animal, cb) {
  Species.findOne(animal.species_id).done(function(err, sp) {
    if(err) {
      animal.species = null;
    } else {
      animal.species = sp;
    }
    cb(animal);
  });
}

function getAnimals(model, cb) {
  Animal.find().where({project_id: parseInt(model.id, 10)}).sort({birthdate: 'asc'}).done(function(err, animals) {
    if(err || !animals) {
      model.animals = [];
      cb(model);
    } else {
      model.animals = animals;
      async.map(animals, function(animal, cb) {
        getSpecies(animal, function(animal) {
          cb(null, animal);
        });
      }, function(err, animals) {
           model.animals = animals;
           cb(model);
         });
    }
  });
}

module.exports = {
  nextId: function(model, cb) {
    model.find({limit: 1, sort: '_id desc'}).done(function(err, sp) {
      if(sp.length > 0) {
        cb(parseInt(sp[0].id) + 1);
      } else {
        cb(1);
      }
    });
  },
  getSpecies: getSpecies,
  getOrganization: getOrganization,
  // assumes from Organization.
  getProjects: function(model, cb) {
    console.log("model_id is type " + typeof model.id);
    Project.find().where({organization_id: parseInt(model.id, 10)}).sort({createdAt: 'asc'}).done(function(err, projects) {
      if(err || !projects) {
        model.projects = [];
        cb(model);
      } else {
        async.map(projects, function(project, cb) {
          getAnimals(project, function(project) {
            cb(null, project);
          });
        }, function(err, projects) {
             model.projects = projects;
             cb(model);
           });
        model.projects = projects;
      }
    });
  },
  // assumes from Project - this is adding an animals array to a project.
  getAnimals: getAnimals,
  // assumes from Animal.
  getProject: function(model, cb) {
    Project.findOne(model.project_id).done(function(err, p) {
      if(err || !p) {
        model.project = null;
        cb(model);
      } else {
        getOrganization(p, function(p) {
          model.project = p;
          cb(model);
        });
      }
    });
  }
};
