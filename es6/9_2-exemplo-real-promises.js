// pending
// resolved
// reject
var posts = fetch('https://willianjusten.com.br/search.json');
setTimeout(() => {
    console.log(posts);
}, 3000);

posts
.then(data => data.json())
.then(data => data.map(post => {
    console.log(post.title);
}))
.catch(err => console.log(err));
