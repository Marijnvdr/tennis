import Ember from 'ember';

export function resultStateClass([playerId, winner]) {
  if (playerId == winner) {
    return 'is-winner';
  } else {
    return 'has-lost';
  }
}

export default Ember.Helper.helper(resultStateClass);
