import DS from 'ember-data';

export default DS.Model.extend({
  playerInvitation: DS.belongsTo('player-invitation', { async: false }),
  domainInvitation: DS.belongsTo('domain-invitation', { async: false })
});