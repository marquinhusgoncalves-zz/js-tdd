// Arrow Function
const brasil = ['são paulo', 'rio de janeiro', 'minas gerais'];
const love = brasil.map(function(city){
  return 'I love ${name}!'
});

const loveArrow = brasil.map((city) => {
  return 'I love ${city}!';
});

const loveArrowSingle = brasil.map(city => {
  return 'I love ${city}';
});

const loveArrowOneLine = brasil.map(city => 'I love ${city}!');

const loveChain = brasil
                    .filter(city => city === 'são paulo')
                    .map(city => 'I love ${city}');

console.log(loveChain);
