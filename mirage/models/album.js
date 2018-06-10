import { Model , belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  genre: belongsTo('genre'),

  artists: hasMany('artist'),
  songs: hasMany('song')
});
