import Ember from 'ember';
import Constants from 'tennis/config/constants';

export default Ember.Controller.extend({
  actions: {
    showHomePage() {
      this.transitionToRoute('player');
    },

    showPlayerResults(tournamentName) {
      this.transitionToRoute('tournament', { queryParams: { tournamentName: tournamentName } });
    },

    showPlayerPage() {
      this.transitionToRoute('player');
    }
  }
});
