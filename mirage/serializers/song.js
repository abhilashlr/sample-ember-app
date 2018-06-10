import ApplicationSerializer from './application';

const include = ['genre', 'album', 'artists'];

export default ApplicationSerializer.extend({
  include
});
