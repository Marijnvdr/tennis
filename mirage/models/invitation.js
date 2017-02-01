import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  playerInvitation: belongsTo('player-invitation'),
  domainInvitation: belongsTo('domain-invitation')
});
