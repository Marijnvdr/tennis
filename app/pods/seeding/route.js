import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    /*
    if (params.year) {
      return this.store.query('seeding', { year: params.year }); // not very well supported by Mirage
    } else {
      return this.store.findAll('seeding');
    } 
    */
    return this.store.findAll('seeding').then((seedings) => {
      if (!params.year) {
        return seedings;
      } else {
        return seedings.filterBy('year', Number(params.year));
      }
    });
  }
});