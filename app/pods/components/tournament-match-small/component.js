import Ember from 'ember';
import Constants from 'tennis/config/constants';

export default Ember.Component.extend({
  attrs: {
    match: null,
    tournament: null
  },

  classNames: ['match-container-small', 'font-small'],
  classNameBindings: ['matchColor'],

  matchColor: Ember.computed('tournament', function() {
    return 'color-' + this.get('tournament').dasherize();
  })
});
