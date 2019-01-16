// ES5
// function multiply(mult, arg1, arg2, arg3) {
//     let arr = [];
//     arr.push(mult * arg1);
//     arr.push(mult * arg2);
//     arr.push(mult * arg3);
//     return arr;
// }

// console.log( multiply(2, 1, 2, 3) );

// ES6
function multiply(mult, ...args) {
    return args.map(arg => arg * mult);
}

console.log( multiply(2, 1, 2, 3,4 ,5) );
