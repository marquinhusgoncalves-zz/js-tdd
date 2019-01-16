// Template Literals
const italy = {
  live: rome,
  love: milano
};

const text = 'Eu moro em ' + italy.live + ' e eu sou apaixonado ' + italy.love + '!';

const newText = `Eu moro em $(italy.live) e eu sou apaixonado $(italy.love) !`;

console.log(newText);

const fruits = 'apple'
             + '\n'
             + 'banana'
             + '\n'
             + 'grape';

const newFruits =
`apple
banana
grape
`;
console.log(newFruits);
