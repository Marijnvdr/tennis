import Ember from 'ember';
import Constants from 'tennis/config/constants';
import matchResultComputed from 'tennis/pods/utils/match-result-computed';
import setTiebreakComputed from 'tennis/pods/utils/set-tiebreak-computed';

export default Ember.Component.extend({
  attrs: {
    match: null,
    tournament: null
  },

  classNames: ['match-container', 'font-small'],
  classNameBindings: ['matchColor'],

  matchColor: Ember.computed('tournament', function() {
    return 'color-' + this.get('tournament').dasherize();
  }),

  player1ResultStateClass: matchResultComputed('player1'),

  player2ResultStateClass: matchResultComputed('player2'),

  set1TiebreakPlayer1: setTiebreakComputed('player1', 'set1Tiebreak'),

  set1TiebreakPlayer2: setTiebreakComputed('player2', 'set1Tiebreak'),

  set2TiebreakPlayer1: setTiebreakComputed('player1', 'set2Tiebreak'),

  set2TiebreakPlayer2: setTiebreakComputed('player2', 'set2Tiebreak'),

  set3TiebreakPlayer1: setTiebreakComputed('player1', 'set3Tiebreak'),

  set3TiebreakPlayer2: setTiebreakComputed('player2', 'set3Tiebreak'),

  set4TiebreakPlayer1: setTiebreakComputed('player1', 'set4Tiebreak'),

  set4TiebreakPlayer2: setTiebreakComputed('player2', 'set4Tiebreak'),

  set5TiebreakPlayer1: setTiebreakComputed('player1', 'set5Tiebreak'),

  set5TiebreakPlayer2: setTiebreakComputed('player2', 'set5Tiebreak'),
});
