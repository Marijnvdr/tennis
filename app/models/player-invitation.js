import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr(),
  month: DS.attr(),
  player: DS.belongsTo('player')
});