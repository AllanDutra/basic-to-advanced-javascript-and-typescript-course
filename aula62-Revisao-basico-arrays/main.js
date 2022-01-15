const nomes = ['Eduardo', 'Eliana', 'Elisangela'];

const novo = [...nomes];

const removido = novo.pop();

const removidoComeco = novo.shift();

novo.unshift(removido);

novo.push(removidoComeco)

// console.log(novo);

// console.log(novo.slice(0, 2));

// console.log(removido, removidoComeco);

const nome = 'Ze Neto e Cristiano';

const nomes2 = nome.split(' ');

console.log(nomes2, 'aqui');

const arrayNomes = ['Bruno', 'Mateus', 'Santiago'];

const nome2 = arrayNomes.join(' ');

console.log(nome2);