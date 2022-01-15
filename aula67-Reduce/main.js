// Reduce -> reduz todo o array em um unico valor, ex: reduzir um array de numeros na soma de todos eles

const numeros = [2, 2];

// Some todos os numeros (reduce)

// const total = numeros.reduce(function (acumulador, valor, indice, array) {

//     return acumulador += valor;

//     // 0 -> valor inicial do acumulador
// }, 0);

const total = numeros.reduce((acumulador, valor) => acumulador += valor);

// retornar os pares (filter)

const arrayPares = numeros.reduce(function (acumulador, valor) {

    if (valor % 2 === 0) acumulador.push(valor);

    // sempre retornar o valor do acumulador e não a ação executada
    return acumulador;

}, []);

// retornar dobro dos valores (map)

const arrayDobros = numeros.reduce(function (acumulador, valor) {

    acumulador.push(valor * 2);

    return acumulador;

}, []);

// console.log(total);

// Retornar a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 108 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoaMaisVelha = pessoas.reduce(function (acumulador, pessoa) {

    if (acumulador.idade < pessoa.idade) return acumulador = pessoa;

    return acumulador;

});

console.log(pessoaMaisVelha);