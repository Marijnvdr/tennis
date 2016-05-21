import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  player1: belongsTo('player'),
  player2: belongsTo('player')
});
