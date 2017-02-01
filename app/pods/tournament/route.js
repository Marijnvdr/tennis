import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return this.store.findAll('match');
    return this.store.findRecord('invitation', 1);
  }
});