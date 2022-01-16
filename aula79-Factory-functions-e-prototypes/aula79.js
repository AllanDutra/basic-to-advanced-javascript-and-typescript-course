// composição ou "mixing"
const falar = {

    falar() { console.log(this.nome + " está falando.") },

}

const comer = {

    comer() { console.log(this.nome + " está comendo.") },

}

const pessoaPrototype = { ...falar, ...comer };

// OU
// const pessoaPrototype = Object.assign({}, falar, comer);

function criaPessoa(nome, sobrenome) {

    // criar método aqui não é legal para a performance
    // return {
    //     nome,
    //     sobrenome,
    //     // falar() { console.log(this.nome + " está falando.") }
    // };

    return Object.create(pessoaPrototype, {

        nome: {
            // enumerable: true,
            // configurable: false,
            // writable: false,
            value: nome
        },

        sobrenome: {
            // enumerable: true,
            // configurable: false,
            // writable: false,
            value: sobrenome
        },

    })

}

const p1 = criaPessoa('Luiz', 'Otávio');

// HERANÇA TENDE A COLOCAR COMPLEXIDADE ONDE NÃO PRECISA DE COMPLEXIDADE NO CÓDIGO