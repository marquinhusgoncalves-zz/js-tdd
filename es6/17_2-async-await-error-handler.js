async function getPosts() {
  try {
    const response = await fetch('https://willianjusten.com.br/search.json');
    const data = await response.json();
    return data.map(post => {
      console.log(post.title);
    });
  }
  catch (err) {
    console.error('Noooooo, we got an error!', err);
  }
}
getPosts();
