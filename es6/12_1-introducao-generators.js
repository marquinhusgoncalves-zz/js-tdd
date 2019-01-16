function getNames() {
  console.log('Gonçalves');
  console.log('Vinicius');
  console.log('Marcus');
}

getNames();

function* getNewNames() {
  yield 'Gonçalves';
  yield 'Vinicius';
  yield 'Marcus';
}
const names = getNewNames();


console.log(names.next());
console.log(names.next().value);
