import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showHomePage() {
      this.transitionToRoute('player');
    },

    showPlayerResults() {
      this.transitionToRoute('tournament');
    },

    showPlayerPage() {
      this.transitionToRoute('player');
    }
  }
});
