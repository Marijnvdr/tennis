import Ember from 'ember';

export default Ember.Helper.extend({
  compute([match], namedArgs) {
    if (match !== undefined) {
      let winner = match.get('winner');
      let tiebreakLost = match.get(`set${namedArgs.set}Tiebreak`);
      let tiebreakWon = 7;
      if (tiebreakLost) {
        if (tiebreakLost > 5) {
          tiebreakWon = tiebreakLost + 2;
        }
      } else {
        tiebreakWon = '';
      }
      if (namedArgs.player == winner) {
        return tiebreakWon;
      } else {
        return tiebreakLost;
      }
    }
  }
});
