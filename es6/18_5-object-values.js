const animals = {
  camel: 3,
  llama: 2,
  alpaca: 13,
};
console.log("Total of animals:", Object.values(animals).reduce((a, b) => a + b));
        /*const animalsMap = new Map(Object.entries(animals));
console.log(Object.keys(animals));
console.log(animalsMap.size);
console.log(animalsMap.has('llama'));
console.log(animalsMap.has('lion'));
console.log(animalsMap.get('alpaca'));*/
