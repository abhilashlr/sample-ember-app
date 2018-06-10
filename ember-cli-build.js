'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults);

  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');

  return app.toTree();
};
