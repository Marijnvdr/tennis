import Ember from 'ember';
import Constants from 'tennis/config/constants';

export default Ember.Component.extend({
  attrs: {
    match: null,
    tournament: null
  },
  classNames: ['match-container'],
  classNameBindings: ['matchColor'],
  matchColor: Ember.computed('tournament', function() {
    if (this.tournament == Constants.RolandGarros) {
      return 'color-red';
    } else {
      return 'color-green';
    }
  })
});
