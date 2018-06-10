import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed, get } from '@ember/object';
import DS from 'ember-data';

const {
  PromiseArray
} = DS;

export default Controller.extend({
  modal: service('current-routed-modal'),
  artists: computed({
    get() {
      return PromiseArray.create({
        promise: get(this, 'store').findAll('artist')
      });
    }
  }),
  actions: {
    cancel(model) {
      model.rollbackAttributes();
      get(this, 'modal').close();
    },
    changeArtists(artists) {
      get(this, 'model.artists').clear();
      get(this, 'model.artists').pushObjects(artists);
    },
    save(model) {
      model.save().then(() => {
        alert('song saved');
        get(this, 'modal').close();
      }).catch((err) => alert(err));
    }
  }
});
