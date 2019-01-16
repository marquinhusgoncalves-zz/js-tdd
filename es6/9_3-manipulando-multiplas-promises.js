const currency = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ currency: 'euro', value: '3.50'});
    }, 3000)
});

const countries = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Italy', 'Spain', 'England']);
    },400)
});

Promise
    .all([currency, countries])
    .then(responses => {
        console.log(responses);
    })

  Promise
    .race([currency, countries])
    .then(responses => {
        console.log(responses);
    })
