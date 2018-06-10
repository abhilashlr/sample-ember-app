import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { find, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | songs/index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /songs/index', async function(assert) {
    let songs = server.createList('song', 10);

    await visit('/songs');

    assert.equal(currentURL(), '/songs');

    assert.equal(findAll('[data-test-songs] .card').length, 10);
    assert.equal(find('[data-test-songs] .card:first-child .card-title').textContent.trim(), songs[0].title);
  });
});
