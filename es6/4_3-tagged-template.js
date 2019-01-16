const city = 'Bahia';
const someThing = 'Praias';
const otherThing = 'Carnaval';

function green(template, ...values) {
  return template.reduce( (accumulator, part, i) => {
    return `
      ${accumulator}
      <span class="green">${values[ i - 1 ].toUpperCase()}</span>
      ${part}
      `
  });
}

const brasil = green`I live in ${city} the city of ${someThing} and ${otherThing}`;

document.body.innerHTML = brasil;
