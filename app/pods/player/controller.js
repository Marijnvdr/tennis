import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['player'],
  player: null,

  actions: {
    showPlayerResults() {
      this.transitionToRoute('tournament');
    }
  }
});
