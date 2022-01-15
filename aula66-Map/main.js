// Map -> pode alterar os valores do array
// Sempre vai ter o mesmo tamanho do array original.
// cuidado pois mexe no objeto original

const numeros = [5, 50, 80, 7, 3, 4, 97, 1, 26, 17, 7651, 0.5];

// Dobrar números

const numerosDuplicados = numeros.map(num => num * 2);

// console.log(numerosDuplicados);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// retornar apenas string com o nome da pessoa
const r1 = pessoas.map(p => p.nome);
// console.log('r1', r1);

// remover apenas a chave "nome" do objeto
const r2 = pessoas.map(p => ({ idade: p.idade }));
// console.log('r2', r2);

// adicionar uma chave id em cada objeto
const r3 = pessoas.map((p, i) => ({ ...p, id: i + 1 }));
// console.log('r3', r3);

console.log(pessoas);