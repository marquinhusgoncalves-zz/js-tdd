// Proxy é uam forma de defiinir comportamentos diferentes pra métodos dentro de um objeto
let obj = {
  name: 'Marcus',
  age: 33
};

let proxy = new Proxy(obj, {
  get(target, name) {
    console.log('Alguém esta pedindo o nome');
    return target[name];
  },
  set(target, name, value) {
    console.log('Alguém esta mudando o nome');
    target[name] = value.toUpperCase();
  }
});
