import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  age: DS.attr()
});