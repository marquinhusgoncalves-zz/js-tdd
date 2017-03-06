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
