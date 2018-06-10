import { Model , belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  genre: belongsTo(),

  artists: hasMany(),
  songs: hasMany()
});
