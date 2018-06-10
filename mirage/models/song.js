import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  album: belongsTo(),
  genre: belongsTo(),

  artists: hasMany()
});
