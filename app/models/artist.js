import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { computed, get } from '@ember/object'

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  avatar: attr('string'),

  songs: hasMany('song', {
    async: true
  }),

  name: computed('firstName', 'lastName', {
    get() {
      return `${get(this, 'firstName')} ${get(this, 'lastName')}`;
    }
  })
});
