import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    /*
    if (params.year) {
      return this.store.query('seeding', { year: params.year }); // not very well supported by Mirage
    } else {
      return this.store.findAll('seeding');
    }
    */
    if (!params.year) {
      params.year = '2016';
    }
    if (!params.page) {
      params.page = '1';
    }
    let page = Number(params.page);
    if (page < 1) {
      page = 1;
    } else {
      if (page > 2) {
        page = 2;
      }
    }
    let begin = (page - 1) * 16;
    let end = page * 16;
    return this.store.findAll('seeding').then((seedings) => {
      return seedings.filterBy('year', Number(params.year)).slice(begin, end);
    });
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  }
});
