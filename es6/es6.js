//Escopo
var animal;
function sayAnimal() {
  var animal = 'cat';
  console.log(animal);
}
sayAnimal();
console.log(animal);

//LET
var animals = 'cat';
console.log(animals);

{
  // let animals = 'dog';
  console.log(animals);
}

console.log(animals);

//CONST
 const secretNumber = 33;
 //não é possível alterar o valor
 secretNumber = 10;

 const marq = {
   name: 'Marquinhus',
   age: 18
 };
 console.log(marq);
//é possível alterar o valor de uma propriedade do objeto
 marq.age = 33;

 //porém não é possivel alterar o objeto
 marq = {
   name: 'Vinicius',
   age: 20
 }
 //para ser um objeto imutável teria que usar...
 Object.freeze(marq);

 marq.age = 20;
 console.log(marq);

//  Temporal Dead Zone
//Aqui ele reconhece a variável porém ela não recebeu valor ainda = undefined
console.log(teste);
var teste = 'teste';

//com let ou const a variável nem é reconhecida
console.log(teste);
let teste = 'teste';

//Arrow Function
const brasil = ['são paulo', 'rio de janeiro', 'minas gerais'];
const love = brasil.map(function(city){
  return 'I love ${name}!'
});

const loveArrow = brasil.map((city) => {
  return 'I love ${city}!';
});

const loveArrowSingle = brasil.map(city => {
  return 'I love ${city}';
});

const loveArrowOneLine = brasil.map(city => 'I love ${city}!');

const loveChain = brasil
                    .filter(city => city === 'são paulo')
                    .map(city => 'I love ${city}');

console.log(loveChain);

//Arrow Function and The Lexical This

const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  console.log(this);
});

const btn = document.getElementById('btn');
btn.addEventListener('click',() => {
  console.log(this);
});

const sandwich = {
  bread: 'white',
  cheese: 'cheddar',

  prepare: function() {
    return 'I want a sandwich with $(this.bread) bread and $(this.cheese)'
  },

  make: function() {
    var that = this;
    window.setTimeout(function() {
      console.log( that.prepare() );
    }, 500);
  };
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function() { sandwich.make() })

//Template Literals
const italy = {
  live: rome,
  love: milano
};

const text = 'Eu moro em ' + italy.live + ' e eu sou apaixonado ' + italy.love + '!';

const newText = `Eu moro em $(italy.live) e eu sou apaixonado $(italy.love) !`;

console.log(newText);

const fruits = 'apple'
             + '\n'
             + 'banana'
             + '\n'
             + 'grape';
          
const newFruits = 
`apple
banana
grape
`;
console.log(newFruits);

//Template Literals to HTML Fragments

const article = {
  title: 'Aprendendo Template Strings',
  into: 'Uma breve explicaçÃo de como utilizr tempplte string do ES6 em seu código hoje!',
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

//docuemnt.body.innerHTML = markup;
console.log(markup);

//Tagged Template