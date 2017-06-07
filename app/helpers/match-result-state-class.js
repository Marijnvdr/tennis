import Ember from 'ember';

export default Ember.Helper.extend({
  compute([match], namedArgs) {
    let winner = match.get('winner');
    if (namedArgs.player == winner) {
      return 'is-winner';
    } else {
      return 'has-lost';
    }
  }
});
