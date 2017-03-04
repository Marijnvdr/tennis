import Ember from 'ember';

export default function matchResultComputed(playerProperty) {
  return Ember.computed(`match.${playerProperty}`, function() {
    let match = this.get('match');
    let winner = match.get('winner');
    if (match !== undefined && winner !== undefined) {
      let playerId = match.get(`${playerProperty}.id`);
      if (playerId == winner) {
        return 'is-winner';
      } else {
        return 'has-lost';
      }
    }
  });
}
