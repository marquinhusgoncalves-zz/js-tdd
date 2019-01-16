// WeakSet similar ao Set porém o uso é de objeto
let obj1 = {
  name: 'Marcus',
  age: 33
};

let obj2 = {
  name: 'Vinicius',
  age: 23
};

let ws = new WeakSet([obj1, obj2]);
ws.add({type: 'obz'});
ws.delete(obj2);
