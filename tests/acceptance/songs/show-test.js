import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | songs/show', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /songs/show', async function(assert) {
    let songs = server.createList('song', 2);
    await visit('/songs/2');

    assert.equal(currentURL(), '/songs/2');

    assert.equal(find('[data-test-song] h2').textContent.trim(), songs[1].title);
  });
});
