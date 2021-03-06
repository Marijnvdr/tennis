import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('player', { path: '/' });
  this.route('seeding', { path: '/seeding' });
  this.route('result', { path: '/result' });
  this.route('tournament', { path: '/tournament' });
});

export default Router;
