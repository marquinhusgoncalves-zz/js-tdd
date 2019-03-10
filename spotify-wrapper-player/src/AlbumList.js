function createMarkup(data) {
  return data.map(album => `
    <div class="list-item">
      <img src="${album.images[0].url}" alt="${album.name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${album.name}</p>
        <p class="list-subtitle">${album.artists[0].name}</p>
      </div>
    </div>`).join('');
}

export default function AlbumList(data, element) {
  const markup = createMarkup(data);
  /* eslint-disable no-param-reassign */
  element.innerHTML = markup;
  /* eslint-enable no-param-reassign */
}
