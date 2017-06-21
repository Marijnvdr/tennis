import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['year', 'page'],
  year: null,
  page: null
});
