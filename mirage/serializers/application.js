import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  /*
  serialize(object, request) {
    // This is how to call super, as Mirage borrows [Backbone's implementation of extend](http://backbonejs.org/#Model-extend)
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);
    // Add metadata, sort parts of the response, etc.

    return json;
  } 
  */ 
});
