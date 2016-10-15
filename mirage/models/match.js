import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  previousRound: hasMany('result'),
  currentMatch: belongsTo('result'),
  nextRound: belongsTo('result')
});
