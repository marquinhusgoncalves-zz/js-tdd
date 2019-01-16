const data = [
    {
        name: 'Marcus',
        age: 33,
        city: 'S.B.Campo'
    },
    {
        name: 'Jessica',
        age: 25,
        city: 'Belo Horizonte'
    }
]

const sampleArray = [4, -5, 0, -1];

const underZero = sampleArray.find(x => x < 0);

const underZeroIndex = sampleArray.findIndex(x => x < 0);

console.log(underZero);

console.log(underZeroIndex);

const marcus = data.find(person => person.name === 'Marcus');

const marcusIndex = data.findIndex(person => person.name === 'Marcus');

console.log(marcus);

console.log(marcusIndex);
