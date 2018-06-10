import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),

  genre: belongsTo('genre', {
    async: false
  }),

  artists: hasMany('artist', {
    async: false
  }),

  songs: hasMany('song', {
    async: false
  })
});
