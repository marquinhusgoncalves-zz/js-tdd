// Template Literals to HTML Fragments

const article = {
  title: 'Aprendendo Template Strings',
  into: 'Uma breve explicação de como utilizar tempplate string do ES6 em seu código hoje!',
  body: 'LoremElit ullamco labore anim voluptate nisi laboris. Incididunt velit magna pariatur aliquip aute incididunt eiusmod ex aliqua Lorem ipsum et ipsum. Mollit exercitation tempor culpa irure sunt qui labore ipsum anim aliqua adipisicing officia.',
  author: 'Marquinhus',
  tags: ['es6', 'js', 'template-literal']
};

function renderAuthor(name) {
  return name ? name : 'unknown';
}


const markup = `
  <article>
    <header>
      <h1>${article.title}</h1>
    </header>
    <section>
      <p>${article.into}</p>
    </section>
    <footer>
      <ul>
        ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
      </ul>
      <p>Author: ${renderAuthor(article.author)}</p>
    </footer>
  </article>
`;

document.body.innerHTML = markup;
// console.log(markup);
