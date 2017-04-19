import Ember from 'ember';
import Constants from 'tennis/config/constants';

export default Ember.Controller.extend({
  queryParams: ['tournamentName'],
  tournamentName: null
});
