import SongEditRoute from './edit';
import { get } from '@ember/object';

export default SongEditRoute.extend({
  controllerName: 'songs/edit',
  templateName: 'songs/edit',

  model() {
    return get(this, 'store').createRecord('song');
  }
});
