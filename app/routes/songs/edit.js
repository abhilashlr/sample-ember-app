import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import ModalRouteMixin from 'ember-routable-modal/mixins/route';

export default Route.extend(ModalRouteMixin, {
  store: service(),

  model(params) {
    return get(this, 'store').findRecord('song', params.id);
  }
});
