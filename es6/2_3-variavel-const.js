// CONST
 const secretNumber = 33;
 // não é possível alterar o valor
 secretNumber = 10;

 const marq = {
   name: 'Marquinhus',
   age: 18
 };
 console.log(marq);
// é possível alterar o valor de uma propriedade do objeto
 marq.age = 33;

 // porém não é possivel alterar o objeto
 marq = {
   name: 'Vinicius',
   age: 20
 }
 // para ser um objeto imutável teria que usar...
 Object.freeze(marq);

 marq.age = 20;
 console.log(marq);
