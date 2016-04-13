import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr(),
  tournament: DS.attr(),
  seedingNr: DS.attr(),
  player: DS.belongsTo('player')
});
