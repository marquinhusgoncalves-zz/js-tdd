/* global document */

import spotify from './Spotify';
import rendeAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');

albums
  .then(data => rendeAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo));
