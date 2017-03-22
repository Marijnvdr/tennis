import Ember from 'ember';
import Constants from 'tennis/config/constants';
import matchResultComputed from 'tennis/pods/utils/match-result-computed';

export default Ember.Component.extend({
  attrs: {
    match: null,
    tournament: null
  },

  classNames: ['match-container-small', 'font-small'],
  classNameBindings: ['matchColor'],

  matchColor: Ember.computed('tournament', function() {
    return 'color-' + this.get('tournament').dasherize();
  }),

  player1ResultStateClass: matchResultComputed('player1'),

  player2ResultStateClass: matchResultComputed('player2'),
});
