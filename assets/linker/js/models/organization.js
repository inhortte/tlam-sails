var Organization = DS.Model.extend({
  name: DS.attr('string'),
  abbr: DS.attr('string'),
  projects: DS.attr()
});

module.exports = Organization;
