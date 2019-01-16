let obj1 = {
  name: 'Marcus',
  age: 33
};

let obj2 = {
  name: 'Vinicius',
  age: 23
};

let wm = new WeakMap();
wm.set(obj1, 'Info do Marcus');
wm.set(obj2, 'Info do Vinicius');
