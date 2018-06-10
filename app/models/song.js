import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  cover: attr('string'),
  spotifyLink: attr('string'),
  title: attr('string'),
  yearOfRelease: attr('string'),

  album: belongsTo('album', {
    async: false
  }),
  genre: belongsTo('genre', {
    async: false
  }),

  artists: hasMany('artist', {
    async: true
  })
});
