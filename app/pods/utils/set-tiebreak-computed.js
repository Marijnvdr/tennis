import Ember from 'ember';

export default function setTiebreakComputed(playerProperty, tiebreakProperty) {
  return Ember.computed(`match.${playerProperty}`, function() {
    let match = this.get('match');
    if (match !== undefined) {
      let winner = match.get('winner');
      let playerId = match.get(`${playerProperty}.id`);
      let tiebreakLost = match.get(`${tiebreakProperty}`);
      let tiebreakWon = 7;
      if (tiebreakLost) {
        if (tiebreakLost > 5) {
          tiebreakWon = tiebreakLost + 2;
        }
      } else {
        tiebreakWon = '';
      }
      if (playerId == winner) {
        return tiebreakWon;
      } else {
        return tiebreakLost;
      }
    }
  });
}
