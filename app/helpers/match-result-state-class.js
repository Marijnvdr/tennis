import Ember from 'ember';

function matchResult([match], namedArgs) {
  let winner = match.get('winner');
  if (namedArgs.player == winner) {
    return 'is-winner';
  } else {
    return 'has-lost';
  }
}

export default Ember.Helper.helper(matchResult);

