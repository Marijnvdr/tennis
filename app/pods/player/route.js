import Ember from 'ember';
import Constants from 'tennis/config/constants';

export default Ember.Route.extend({
  model: function(params) {
    let periodItems = [];
    let currentYear = new Date().getFullYear();
    periodItems.push('Best results');
    for (let i = currentYear; i >= 2000; i--)
    {
      periodItems.push(i);
    }

    return Ember.RSVP.hash({
      players: this.store.findAll('player'),
      selectedPlayer: (params.player) ? this.store.findRecord('player', params.player) : null,
      tournaments: [Constants.AllGrandslams, Constants.AustralianOpen, Constants.RolandGarros, Constants.Wimbledon, Constants.UsOpen],
      period: periodItems
    });
  }
});
