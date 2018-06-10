import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | songs/edit', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /songs/edit', async function(assert) {
    let songs = server.createList('song', 2);
    await visit('/songs/1/edit');

    assert.equal(currentURL(), '/songs/1/edit');

    assert.equal(find('[data-test-modal-title]').textContent.trim(), `Edit song - ${songs[0].title}`);
    assert.equal(find('[data-test-song-title] input').value.trim(), songs[0].title);
    assert.equal(find('[data-test-song-cover] input').value.trim(), songs[0].cover);
    assert.equal(find('[data-test-song-spotify] input').value.trim(), songs[0].spotifyLink);
    assert.equal(find('[data-test-song-year] input').value.trim(), songs[0].yearOfRelease);
  });
});
