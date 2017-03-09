import Ember from 'ember';
import Constants from 'tennis/config/constants';

export default Ember.Controller.extend({
  tournamentName: Constants.Wimbledon,

  matches4Rnd: Ember.computed.filterBy('model', 'round', 4),

  matchesQf: Ember.computed.filterBy('model', 'round', 5),

  matchesSf: Ember.computed.filterBy('model', 'round', 6),

  matchFinal: Ember.computed.filterBy('model', 'round', 7)
});
