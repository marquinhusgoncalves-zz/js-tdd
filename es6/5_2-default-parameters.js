
function hello(name = 'Marcus', surname = 'Vinicius') {
//    O valor default eu passo já no parâmetro
//    name = name || 'Marcus';
//    surname = surname || 'Vinicius';
    console.log(`Hello ${name} ${surname} how are you`);
}

// Default
hello();

// Passando Valor
hello('Pedro', 'Paulo');

// Passando apenas um valor
hello('Pedro');
