import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  cover() {
    return faker.image.imageUrl();
  },
  spotifyLink() {
    return faker.internet.url();
  },
  title() {
    return faker.lorem.sentence()
  },
  yearOfRelease: 1989
});
