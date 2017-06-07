import Ember from 'ember';

function setTiebreak([match], namedArgs) {
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

export default Ember.Helper.helper(setTiebreak);
