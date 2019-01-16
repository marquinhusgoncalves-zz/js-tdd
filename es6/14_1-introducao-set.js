// Set é um objeto que permite guardar valores únicos de um tipo seja ele primitivo string inteiro ou seja ele objeto.
let mySet = new Set(['marcus', 'viniciius', 'gonçalves']);

mySet.add('lourencato');

mySet.delete('gonçalves');

console.log(mySet.has('marcus'));
console.log(mySet.has('souza'));

console.log(mySet[1]);

let it = mySet.values();

for(name of it) {
  console.log(name);
}
