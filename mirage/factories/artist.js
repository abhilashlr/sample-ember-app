import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  avatar() {
    return faker.internet.avatar();
  },
  'first_name'() {
    return faker.name.firstName();
  },
  'last_name'() {
    return faker.name.lastName();
  }
});
