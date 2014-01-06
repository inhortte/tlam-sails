var Animal = DS.Model.extend({
  animal_id: DS.attr('number'),
  frequency: DS.attr('number'),
  nickname: DS.attr('string'),
  sex: DS.attr('string'),
  birthdate: DS.attr('date'),
  release_date: DS.attr('date'),
  microchip: DS.attr('number'),
  enclosure_type: DS.attr('string'),
  release_site: DS.attr('string'),
  remarks: DS.attr(),
  release_location_N: DS.attr('number'),
  release_location_E: DS.attr('number'),
  deathdate: DS.attr('date'),
  cause_of_death: DS.attr(),
  species_id: DS.attr('number'),
  project_id: DS.attr('number'),
  species: DS.attr(),
  project: DS.attr()
});

module.exports = Animal;
