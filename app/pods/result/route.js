import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findAll('result').then((results) => {
      return results.filterBy('year', Number(params.year));
    });
  }
});