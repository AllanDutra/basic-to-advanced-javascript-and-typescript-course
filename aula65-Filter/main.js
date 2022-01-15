// Filter -> vai filtrar o array e retornar outro com a msm quantidade ou menos.

// Map -> modificar o array

// Reduce -> reduzir o array em um unico valor

const numeros = [5, 50, 80, 7, 3, 4, 97, 1, 26, 17, 7651, 0.5];

// filter requer um retorno booleano. (true: adiciona no novo array), (false: não adiciona) 
const maioresQue10 = numeros.filter(num => num > 10);

// console.log(maioresQue10);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// nomes com 5 letras ou mais
const r1 = pessoas.filter(p => p.nome.length >= 5);

console.log('r1', r1);

// pessoas com mais de 50 anos
const r2 = pessoas.filter(p => p.idade > 50);

console.log('r2', r2);

// pessoas com nome terminando com a
const r3 = pessoas.filter(p => p.nome.toLowerCase().endsWith('a'));

console.log('r3', r3);