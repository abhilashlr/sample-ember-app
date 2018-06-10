import { faker } from 'ember-cli-mirage';

export default function(server) {
  let songs = server.createList('song', 20);

  server.createList('artist', 4);

  let artistRandomizer;
  songs.forEach((song) => {
    artistRandomizer = parseInt(Math.random() * 4);
    for (let i = 0; i <= artistRandomizer; i++) {
      song.createArtist({
        avatar: faker.internet.avatar(),
        'first_name': faker.name.firstName(),
        'last_name': faker.name.lastName()
      });
    }

    song.createGenre({
      title: faker.lorem.word()
    });

    song.createAlbum({
      title: faker.lorem.sentence()
    });
  });
}
