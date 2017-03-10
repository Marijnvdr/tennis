import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let matches = this.store.findAll('result');

    return Ember.RSVP.hash({
      matches4Rnd: matches.then((m) => {
        return m.filterBy('round', 4);
      }),
      matchesQf: matches.then((m) => {
        return m.filterBy('round', 5);
      }),
      matchesSf: matches.then((m) => {
        return m.filterBy('round', 6);
      }),
      matchFinal: matches.then((m) => {
        return m.filterBy('round', 7).get('firstObject');
      })
    });
  }
});
