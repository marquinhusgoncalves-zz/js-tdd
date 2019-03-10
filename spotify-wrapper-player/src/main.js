/* global document */

import spotify from './Spotify';
import rendeAlbums from './AlbumList';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');

albums
  .then(data => rendeAlbums(data.albums.items, albumList));
