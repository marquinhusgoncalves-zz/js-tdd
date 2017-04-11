function sum (a, b) {
    return a + b;
}

// named export
// ter vários exports dentro de um mesmo arquivo
// só pode chamar com o mesmo nome
// import precisa das chaves {sub}

export function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(a, y) {
    return a / y;
}

var PI = 3.14;
export {mult as multiplicacao, div, PI};

// método principal
// só pode ter um default por arquivo
// importar com qualquer nome
// não precisa utilizar chaves

export default sum;