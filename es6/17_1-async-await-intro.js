async function getPosts() {
  const response = await fetch('https://willianjusten.com.br/search.json');
  const data = await response.json();
  return data.map(post => {
    console.log(post.title);
  });
  /*return fetch('https://willianjusten.com.br/search.json')
              .then(data => data.json())
              .then(data => data.map(post => {
                  console.log(post.title);
              }));*/
}
getPosts();
