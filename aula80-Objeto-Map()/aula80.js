const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {

//     const { id } = pessoa;

// a ordem aqui sempre vai ser crescente das chaves e chaves vao ser string
//     novasPessoas[id] = { ...pessoa };

// }

// a chave se mantem na ordem e numerica
const novasPessoas = new Map();

for (const pessoa of pessoas) {

    const { id } = pessoa;

    novasPessoas.set(id, { ...pessoa });

}

// console.log(novasPessoas.get(2));

// comum no phyton
// for (const [identifier, { id, nome }] of novasPessoas) {

//     console.log(identifier, id, nome);

// }

// for (const pessoas of novasPessoas.values()) {

//     console.log(pessoas);

// }

novasPessoas.delete(2);