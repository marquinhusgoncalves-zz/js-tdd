function ajax(url) {
  fetch(url)
      .then(data => data.json())
      .then(data => dados.next(data));
}

//Sempre que usar o yield adicionar * na function
function* ajaxGen() {
  console.log('Buscando post...');
  const post = yield ajax('https://willianjusten.com.br/search.json');
  console.log(post);

  console.log('Buscando dados github...');
  const github = yield ajax('https://api.github.com/users/marquinhusgoncalves');
  console.log(github);
}

const dados = ajaxGen();
dados.next();
