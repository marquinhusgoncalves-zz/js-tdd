var data = {
    name: 'Marcus',
    surname: 'Gonçalves',
    age: 33,
    blog: 'www.marquinhusgoncalves.com',
    social: {
        twitter: '@marquinhusgonc',
        facebook: '/marquinhusgoncalves'
    }
};

// const name = data.name;
// const surname = data.surname;
// const age = data.age;
// const twitter = data.social.twitter;
// const facebook = data.social.facebook;

// console.log(name, surname, age, twitter, facebook);

const {name, surname} = data;
console.log(name, surname);

const {twitter, facebook} = data.social;
console.log(twitter, facebook);

const {facebook: fb} = data.social;
console.log(fb);

const {city = 'S.B.Campo'} = data;
console.log(city);
