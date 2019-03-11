/* global document */

import spotify from './Spotify';
import rendeAlbums from './AlbumList';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    spotify.search.albums(searchInput.value)
      .then(data => rendeAlbums(data.albums.items, albumList));
  });
}
