export default function() {
  this.get('/songs', (schema) => schema.songs.all());

  this.get('/songs/:id', (schema, request) => schema.songs.find(request.params.id));

  this.post('/songs', (schema, request) => {
    let song = JSON.parse(request.requestBody);
    song.data.id = parseInt(Math.random() * 1000);
    return song;
  });

  this.patch('/songs/:id', (schema, request) => JSON.parse(request.requestBody));

  this.get('/artists', (schema) => schema.artists.all());

  // TODO
  // this.delete('/songs/:id');
}
