import Ember from 'ember';
import Constants from 'tennis/config/constants';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      players: this.store.findAll('player'),
      tournaments: [Constants.AllGrandslams, Constants.AusOpen, Constants.RolandGarros, Constants.Wimbledon, Constants.UsOpen]
    });
  }
});