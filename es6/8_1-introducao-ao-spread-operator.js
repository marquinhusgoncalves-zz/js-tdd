let front = ['react', 'vue', 'angular'];
let back = ['python', 'ruby', 'node'];

// Essa seria a implementação antiga
// let fullStack = [];
// fullStack = fullStack.concat(back);
// fullStack.push('infernoJS');
// fullStack = fullStack.concat(front);
// console.log(fullStack);

// Essa no ES6

let fullStack = [...front, 'infernoJS', ...back];
console.log(fullStack);

console.log(...'Marquinhus');
console.log( [...'Marquinhus'] );
console.log(...front);
