import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr(),
  tournament: DS.attr(),
  round: DS.attr(),
  matchNr: DS.attr(),
  player1: DS.belongsTo('player'),
  player2: DS.belongsTo('player'),
  winner: DS.attr(),
  set1Pl1: DS.attr(),
  set1Pl2: DS.attr(),
  set2Pl1: DS.attr(),
  set2Pl2: DS.attr(),
  set3Pl1: DS.attr(),
  set3Pl2: DS.attr(),
  set4Pl1: DS.attr(),
  set4Pl2: DS.attr(),
  set5Pl1: DS.attr(),
  set5Pl2: DS.attr(),
  set1Tiebreak: DS.attr(),
  set2Tiebreak: DS.attr(),
  set3Tiebreak: DS.attr(),
  set4Tiebreak: DS.attr(),
  set5Tiebreak: DS.attr(),
  nrOfSetsWonByPl1: DS.attr(),
  nrOfSetsWonByPl2: DS.attr(),
  retired: DS.attr()
});
