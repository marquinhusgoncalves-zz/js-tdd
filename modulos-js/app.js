// import método from 'biblioteca'
// * carrega tudo da lib
// as -> alias para o método (novo nome)

// Nesse import todos os métodos são incluídos
// import * as R from 'ramda';

// Nesse import métodos espeçifico são incluídos
import { union as juntaTudo, uniq } from 'ramda';

import sum, {sub, multiplicacao, div, PI} from './utils';

import react from 'react';
import reactDOM from 'react-dom';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

// R foi o nome dado para toda a biblioteca
// const arr3 = R.union(arr1, arr2);

// juntaTudo foi dado o nome a biblioteca específica
const arr3 = juntaTudo(arr1, arr2);

// const arr4 = R.uniq(arr1);
const arr4 = uniq(arr1);

console.log(arr3);

console.log(arr4);

console.log( sum(2, 3) );

console.log( sub(3, 2) );

console.log( multiplicacao(10, 2) );

console.log( div(8, 4) );

console.log( PI );