var Project = DS.Model.extend({
  name: DS.attr('string'),
  abbr: DS.attr('string'),
  organization_id: DS.attr('number'),
  animals: DS.attr(),
  organization: DS.attr()
});

module.exports = Project;
