import DS from 'ember-data';

export default DS.Model.extend({
  previousRound: DS.hasMany('result'),
  currentMatch: DS.belongsTo('result'),
  nextRound: DS.belongsTo('result')
});
