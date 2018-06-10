import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  cover() {
    return `${faker.image.imageUrl()}?_=${Math.random() * 10000}`;
  },
  spotifyLink() {
    return faker.internet.url();
  },
  title() {
    return faker.lorem.sentence();
  },
  yearOfRelease: 1989
});
