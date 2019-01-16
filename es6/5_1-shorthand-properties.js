let firstName = 'Marcus';
let surname = 'Gonçalves';
let age = 33;

const person = {
  firstName,
  surname,
  age,

  hello() {
    console.log('Hello');
  }
};

console.log(person);

person.hello();
