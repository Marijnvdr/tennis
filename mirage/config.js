export default function() {
  this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '';    // make this `api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  // this.get('/players');
  this.get('/players');
  this.get('/seedings');
  this.get('/blog-posts');
  this.get('/authors/:id');
  this.get('/players/:id');
  
  this.pretender.handledRequest = function(verb, path, request) {
    console.info(`Request ${path} (verb: ${verb}) has response: ${request.responseText}`);
  };

  this.pretender.unhandledRequest = function(verb, path, request) {
    console.error(`No request defined for ${path} (verb: ${verb})`);
  };

  this.pretender.passthroughRequest = function(verb, path, request) {
    console.info(`Request ${path} (verb: ${verb}) successfully sent for passthrough`);
  };
  
  /*
  this.get('/seedings', (schema, request) => {
    let year = request.queryParams.year;
    if (year) {
      return schema.db.seedings.where({year: year}); // This will return a plain POCO object, not valid JSON.
    } else {
      return schema.seeding.all();
    }
    var id = request.params.id;
  });
  */
}
