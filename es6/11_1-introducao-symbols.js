// Symbol é um tipo primitivo como Array, String
// Ele é imutável e único

let foo = Symbol('name');
let bar = Symbol('name');
console.log(foo);

// Fazendo comparação com == ou === eles sÃo diferentes por serem únicos
console.log(foo === bar);

let obj = {
  [Symbol('name')]: 'Marcus',
  [Symbol('age')]: 33,
  city: 'Sampa'
}

// Exibe todo conteúdo do objeto
console.log(obj);

// Exibe apenas o que não é Symbol
console.log(Object.keys(obj));

// Exibir os Symbols do object
const symbols = Object.getOwnPropertySymbols(obj);
const data = symbols.map((sym) => obj[sym]);

console.log(data);
