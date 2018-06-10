import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  album: belongsTo('album'),
  genre: belongsTo('genre'),

  artists: hasMany('artist')
});
