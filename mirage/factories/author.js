import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Author ${i}`;
  },  
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  age() {
    // list method added by Mirage
    return faker.list.random(18, 20, 28, 32, 45, 60)();
  }
});
